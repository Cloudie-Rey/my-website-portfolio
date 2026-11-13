import { handlePreflight, onRequestPost } from './birthday-email.js';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return handlePreflight({ request, env });
    if (request.method === 'POST') return onRequestPost({ request, env });
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST, OPTIONS' } });
  }
};
