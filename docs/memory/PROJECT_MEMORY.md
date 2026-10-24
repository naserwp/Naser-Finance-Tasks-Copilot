# Project memory

## Purpose and history

The original personal app was discussed in June–July 2026 as Finance & Tasks Copilot. A historical local folder named `FINANCE-AND-TASKS-COPILOT-2` used Firebase (`naser-todo` / display name `finance-copilot`), Neon PostgreSQL, Drizzle, WhatsApp and Gemini/OpenAI parsing. Its original source repository was not recovered; this project was rebuilt from the established requirements. Do not claim that the historical code or its data was migrated.

A private ChatGPT Site was rebuilt in October 2026, then a native Next.js copy was placed on GitHub and deployed to Vercel. The Site remains the working hosted data source. The public Git repository contains application code, not the user's financial evidence.

## Current application

- Next.js App Router, React, TypeScript, Tailwind and Radix-based components.
- Overview, Transactions, Accounts, Budgets, Tasks, Documents, Statements and Savings.
- Personal/Business workspaces, month selection, BDT totals and CSV export.
- Entry create/edit/delete; task completion; transfers and card repayments separated from income/expense totals.
- Document upload (PDF, JPG, PNG, WebP), multiple files and mobile camera input; 15 MB/file; SHA-256 duplicate detection.
- Browser PDF text extraction with optional in-memory password and on-device English image OCR; manual review before a ledger entry.
- Statement references and saved PDFs are distinct: an email link does not mean the PDF was downloaded or unlocked.
- DPS/FDR terms are separate from confirmed paid contributions.

## Local architecture

This handoff is on Git branch `local-codex-workspace`; it has not replaced the hosted `main` branch.

`app/api/records/route.ts` and `app/api/documents/route.ts` call `lib/local-store.ts` when `VERCEL` is not set. SQLite is `.private/data/finance.sqlite`; upload files are `.private/uploads/documents/<sha256>`. A private snapshot, when included, is `.private/imports/finance-records.json` and imports once without overwriting existing IDs. Missing documents return a clear error.

Local servers bind to 127.0.0.1. Local APIs reject non-local hostnames and mismatching origins. This is a local development setup, not an authenticated LAN/public server. Do not expose it using a tunnel without adding explicit authentication.

On Vercel, routes remain a fail-closed server-only proxy to the original Site. Both `SITES_BACKEND_TOKEN` and `FINANCE_PRIVATE_DEPLOYMENT=true` are required after verifying Vercel Authentication protects every deployment. The hosted private data connection remained incomplete at the last checkpoint; recheck it rather than assuming approval or activation.

## Hosted source and data

Site project ID: `appgprj_6abf12adaa708191820a6aff6bc4cc00`.
Site data uses managed D1 plus R2; local SQLite is an independent snapshot, not continuous sync. The original private Site's import used an encrypted server-side bootstrap and a runtime decryption secret. Those secrets and encrypted import files are not part of this public repository.

## Evidence limitations

Build/type checks have passed on the cloud workspace. A cloud workspace check is not verification on the user's Windows PC. Camera behavior, PDF password handling and OCR need device-level verification. A PDF text extraction is not a fully reconciled statement or an automatic multi-row transaction import.

## User workflow

The owner will supply income totals, DPS information and unlocked statements or receipt screenshots. Read and classify source evidence, keep uncertain fields flagged, review candidates, then calculate only confirmed transactions. See `.private/PRIVATE_CONTEXT.md` when supplied for the private snapshot details; do not copy it into public documentation.
