# Naser Finance & Tasks Copilot — agent working instructions

Read `docs/memory/PROJECT_MEMORY.md`, `docs/memory/DECISIONS.md`, and `docs/memory/NEXT_STEPS.md` before editing. Update the memory files after meaningful changes so a new Codex conversation can continue the project.

## Product

A personal/business money and task workspace: income, expenses, accounts, cards, budgets, DPS/FDR, documents, receipt photos and statement review. Currency defaults to BDT. Display dates using the user's chosen locale; imported dates remain as stated in their source.

## Sources of truth

- GitHub: https://github.com/naserwp/Naser-Finance-Tasks-Copilot
- Local handoff branch: `local-codex-workspace`; `main` remains the hosted copy.
- Existing private production Site: https://naser-finance-copilot.naserdev0.chatgpt.site
- Vercel project: naser-finance-tasks-copilot in naserwps-projects.
- Local development uses SQLite and files under `.private/`.
- Hosted Vercel routes use the original private Site backend only when its server-only connection is configured. Deployment readiness does not prove that private data access works.

## Privacy

Never commit `.private/`, financial statements, receipt images, email exports, account numbers, card numbers, PDF passwords, authentication tokens, environment files, SQLite databases or screenshots containing financial information. Store credentials in untracked environment files or the hosting provider's secret store. Run `git status` before committing. Do not publish or broaden access to financial records.

## Accounting

- Use integer minor units (paisa/cents) for amounts.
- Statement balances and due reminders are historical evidence, not new expense transactions or confirmed current balances.
- Unknown balances must stay unknown, not silently become zero.
- Exclude transfers and card repayments from income/expense totals.
- Do not merge currencies without an explicit exchange-rate date and source.
- A reminder is not proof that an installment was paid.
- Account discoveries are candidates; confirm ownership, current status and possible replacements before treating them as active.
- Require review before posting extracted document values. Preserve source links and make repeat import idempotent.
- Keep PDF passwords only in client memory; never persist them.

## Validation

Use Node 22.13+ (Node 24 recommended), `npm install`, `npm run typecheck`, and `npm run build`. Test relevant API/data flows after backend changes. Use a separate temporary data directory for tests via `FINANCE_LOCAL_DATA_DIR`, never the user's live `.private/` directory. State any browser or device checks that were not performed.

## Scope

Preserve existing records and the original private Site. Do not run destructive migrations, send emails, retry bank/card payments, connect financial services, or make financial transactions unless separately requested. Do not promise automatic AI parsing, live bank synchronization or working notifications unless actually configured and verified.
