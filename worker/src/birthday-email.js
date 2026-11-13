const jsonResponse = (body, status, origin) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    ...(origin && { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' })
  }
});

const getAllowedOrigins = env => (env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

export function handlePreflight({ request, env }) {
  const origin = request.headers.get('Origin');
  if (!getAllowedOrigins(env).includes(origin)) return new Response(null, { status: 403 });
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin'
    }
  });
}

const releaseReservation = async (rateLimit, key) => {
  try {
    await rateLimit.delete(key);
  } catch (error) {
    console.error('Could not release birthday email rate-limit reservation:', error);
  }
};

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');
  if (!getAllowedOrigins(env).includes(origin)) {
    return jsonResponse({ error: 'Request origin is not allowed.' }, 403);
  }
  const reply = (body, status) => jsonResponse(body, status, origin);

  const { RESEND_API_KEY, BIRTHDAY_FROM_EMAIL, BIRTHDAY_TO_EMAIL, BIRTHDAY_EMAIL_LIMIT } = env;
  if (!RESEND_API_KEY || !BIRTHDAY_FROM_EMAIL || !BIRTHDAY_TO_EMAIL || !BIRTHDAY_EMAIL_LIMIT) {
    return reply({ error: 'Birthday email is not configured.' }, 503);
  }

  const clientIp = request.headers.get('CF-Connecting-IP');
  if (!clientIp) return reply({ error: 'Unable to identify request source.' }, 400);

  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientIp));
  const ipHash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
  const date = new Date().toISOString().slice(0, 10);
  const rateLimitKey = `birthday-email:${date}:${ipHash}`;

  try {
    if (await BIRTHDAY_EMAIL_LIMIT.get(rateLimitKey)) {
      return reply({ error: 'A birthday email was already sent recently.' }, 429);
    }
    await BIRTHDAY_EMAIL_LIMIT.put(rateLimitKey, 'pending', { expirationTtl: 120 });
  } catch (error) {
    console.error('Birthday email rate limiter is unavailable:', error);
    return reply({ error: 'Birthday email is temporarily unavailable.' }, 503);
  }

  let providerResponse;
  try {
    providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: BIRTHDAY_FROM_EMAIL,
        to: [BIRTHDAY_TO_EMAIL],
        subject: 'A birthday wish from your portfolio',
        text: "Someone clicked the birthday cake on your portfolio.\n\nToday is Dev Spawn Day! thanks for the wishes! here's a slice!"
      })
    });
  } catch (error) {
    console.error('Resend request failed:', error);
    await releaseReservation(BIRTHDAY_EMAIL_LIMIT, rateLimitKey);
    return reply({ error: 'Email delivery failed.' }, 502);
  }

  if (!providerResponse.ok) {
    console.error('Resend rejected the birthday email:', providerResponse.status);
    await releaseReservation(BIRTHDAY_EMAIL_LIMIT, rateLimitKey);
    return reply({ error: 'Email delivery failed.' }, 502);
  }

  try {
    await BIRTHDAY_EMAIL_LIMIT.put(rateLimitKey, 'sent', { expirationTtl: 86400 });
  } catch (error) {
    console.error('Could not persist birthday email rate limit:', error);
  }

  return reply({ sent: true }, 200);
}
