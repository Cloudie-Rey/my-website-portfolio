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

Clicking the birthday cake sends a fixed notification through a Cloudflare Pages Function and Resend. The recipient and Resend API key are read only by the server; they are not included in the browser bundle.

To enable delivery:

1. Verify `reyaadivakar.com` with Resend and use `birthday@reyaadivakar.com` as the sender.
2. In Cloudflare Pages project settings, add `RESEND_API_KEY` and `BIRTHDAY_TO_EMAIL` as secrets, and set `BIRTHDAY_FROM_EMAIL` for both Preview and Production.
3. Create a Cloudflare KV namespace and bind it to the Pages project as `BIRTHDAY_EMAIL_LIMIT` under Functions. This limits repeat sends from the same IP.
4. Redeploy after setting the variables and binding.

Run `npm test` to test the function's origin check, Resend request, and rate limit without sending a real email. A live test requires the Cloudflare settings above and a verified sender domain.
