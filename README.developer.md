# Developer Notes

This guide covers local holiday previews and the optional birthday email integration. For a visitor-facing overview, see the [project README](README.md).

## Holiday scene preview

Start the local development server with `npm run dev`, then add a date override to the local URL to preview a theme without changing your computer's clock:

- `?holidayDate=2026-11-26` — Thanksgiving
- `?holidayDate=2026-11-27` — Christmas season
- `?holidayDate=2026-12-31&holidayHour=23` — New Year's Eve at night
- `?holidayDate=2026-11-07` — Diwali eve, including the diya
- `?holidayDate=2026-04-04` — Easter weekend and spring petals
- `?holidayDate=2026-02-15` — birthday
- `?holidayDate=2026-06-12` — Alvin's birthday

The overrides work while running the Vite development server, including forwarded Codespaces previews, and are disabled in production builds. `holidayHour` accepts an hour from `0` to `23`; without it, the scene uses the browser's local time. Holiday date rules are covered by `npm test`. Diwali dates are maintained in `holiday-calendar.js`; add the observed date for each new year.

## Birthday email

Clicking the birthday cake sends a fixed notification through a Cloudflare Worker (`worker/`) and Resend. The recipient and Resend API key are read only by the Worker; they are not included in the browser bundle. The site itself stays on GitHub Pages.

To enable delivery (run from `worker/`):

1. Verify `reyaadivakar.com` with Resend and use `birthday@reyaadivakar.com` as the sender.
2. `npx wrangler kv namespace create BIRTHDAY_EMAIL_LIMIT`, then paste the returned id into `wrangler.toml`. This limits repeat sends from the same IP.
3. `npx wrangler secret put RESEND_API_KEY` and `npx wrangler secret put BIRTHDAY_TO_EMAIL`.
4. Check `ALLOWED_ORIGINS` and `BIRTHDAY_FROM_EMAIL` in `wrangler.toml`, then `npx wrangler deploy`.
5. Optional auto-deploy: add your Cloudflare API token as a GitHub repository secret named `CLOUDFLARE_API_TOKEN` (Settings → Secrets and variables → Actions). Pushes that change `worker/` then deploy the Worker automatically via `.github/workflows/deploy-worker.yml`. The Resend key and recipient stay as Worker secrets and are not touched.
6. Set `BIRTHDAY_EMAIL_URL` in `script.js` to the deployed Worker URL.

Run `npm test` to test the Worker's origin check, Resend request, and rate limit without sending a real email. A live test requires the Cloudflare settings above and a verified sender domain.
