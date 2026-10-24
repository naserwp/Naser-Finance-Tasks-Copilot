# Naser Finance & Tasks Copilot

Personal income, expenses, accounts, budgets and tasks. Mobile responsive, BDT currency, Personal/Business modes and CSV exports.

## Hosting

This repository is the Next.js / Vercel-compatible export of the original ChatGPT Site. It uses the SAME private Sites data backend, so no financial records are copied into GitHub. The original Site is retained at https://naser-finance-copilot.naserdev0.chatgpt.site.

## Run locally

Use Node 22 or newer. Run `npm install`, then `npm run dev`.

## Private deployment setup

1. Import this repository into Vercel using the Next.js preset.
2. Enable Vercel Authentication for **all deployments**, including production, before enabling data access.
3. Set `SITES_BACKEND_TOKEN` as a server-only encrypted environment variable. Obtain supported service access for the original owner-private Site; never put the token in Git or client code.
4. Set `FINANCE_PRIVATE_DEPLOYMENT=true` only after verifying all-deployment protection.
5. Redeploy. Verify authenticated access and that unauthenticated API access is denied.

Without both server variables, all data routes fail closed with 503. The UI remains available but cannot read or modify records. The original Cloudflare API implementation is preserved in `docs/original-sites-api.txt` for a future standalone database migration. No AI or WhatsApp connection is included.

## Documents and savings

Documents supports camera capture, multiple PDF/image uploads, local PDF password entry and on-device English OCR. Review extracted text before creating a transaction. Exact duplicate uploads are detected by content hash. Savings tracks DPS/FDR terms separately from confirmed paid contributions. Transfers and card repayments are excluded from income/expense totals.

No personal email discoveries, financial records, passwords, encryption keys or PDF bytes are committed to this public repository. The private Sites backend stores these. Vercel needs its server-only connection before uploads and records work.
