# Naser Finance & Tasks Copilot

A personal/business finance workspace with accounts, cards, budgets, tasks, DPS/FDR, receipt photos, PDF/image uploads, statement references and manual review.

The `local-codex-workspace` branch contains this local handoff; `main` remains the hosted copy.

## Local development

Use Node 22.13+ (Node 24 recommended). Run `npm install`, then `npm run dev` and open http://127.0.0.1:3000. Local data is stored in SQLite and files under `.private/`; no hosting token is needed. See `docs/LOCAL_SETUP.md` and `Setup-Local.ps1` for Windows setup.

## Continue in Codex

Open the project folder in Codex Desktop. Start with `AGENTS.md` and `docs/memory/PROJECT_MEMORY.md`. Keep decisions and remaining work current after changes.

## Hosting

The original private application is https://naser-finance-copilot.naserdev0.chatgpt.site. On Vercel, this repository uses its private backend through a server-only proxy. Verify Vercel Authentication protects ALL deployments, then configure `SITES_BACKEND_TOKEN` and `FINANCE_PRIVATE_DEPLOYMENT=true`. Without them, hosted data routes fail closed. Local and hosted copies are NOT automatically synchronized.

## Privacy and calculations

Do not commit `.private/`, statements, account/card numbers, passwords, tokens, environment files or databases. Snapshot data is included only in a private handoff package, never in this public repository. Statement balances and installment reminders are not new expenses or proof of payment. Unknown balances stay unknown; transfers/card repayments are excluded from income/expense totals. Review extracted values before posting.

Checks: `npm run typecheck` and `npm run build`. PDF/OCR reading uses local generated assets after install. Camera support and extraction accuracy should be verified on the owner's device.
