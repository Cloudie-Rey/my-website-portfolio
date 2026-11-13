import assert from 'node:assert/strict';
import test from 'node:test';
import { onRequestPost } from '../worker/src/birthday-email.js';

const createContext = (env, headers = {}) => ({
  request: new Request('https://portfolio.example/api/birthday-email', {
    method: 'POST',
    headers: {
      Origin: 'https://portfolio.example',
      'CF-Connecting-IP': '203.0.113.42',
      ...headers
    }
  }),
  env
});

const createEnv = () => {
  const entries = new Map();
  return {
    ALLOWED_ORIGINS: 'https://portfolio.example',
    RESEND_API_KEY: 'test-key',
    BIRTHDAY_FROM_EMAIL: 'birthday@example.com',
    BIRTHDAY_TO_EMAIL: 'owner@example.com',
    BIRTHDAY_EMAIL_LIMIT: {
      get: async key => entries.get(key) ?? null,
      put: async (key, value) => entries.set(key, value),
      delete: async key => entries.delete(key)
    }
  };
};

test('rejects requests from a different origin', async () => {
  const response = await onRequestPost(createContext(createEnv(), {
    Origin: 'https://attacker.example'
  }));

  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { error: 'Request origin is not allowed.' });
});

test('sends a fixed birthday email and rate-limits repeat requests', async () => {
  const env = createEnv();
  const originalFetch = globalThis.fetch;
  let sentEmail;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    sentEmail = JSON.parse(options.body);
    assert.equal(options.headers.Authorization, 'Bearer test-key');
    return new Response(null, { status: 200 });
  };

  try {
    const response = await onRequestPost(createContext(env));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { sent: true });
    assert.equal(sentEmail.to[0], 'owner@example.com');
    assert.match(sentEmail.text, /Today is Dev Spawn Day!/);

    const limitedResponse = await onRequestPost(createContext(env));
    assert.equal(limitedResponse.status, 429);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('returns a delivery error when Resend rejects the email', async () => {
  const env = createEnv();
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(null, { status: 500 });

  try {
    const response = await onRequestPost(createContext(env));
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'Email delivery failed.' });
  } finally {
    globalThis.fetch = originalFetch;
  }
});
