# Decisions

- Preserve the working private ChatGPT Site; do not replace its database during local setup.
- Use a native Next.js repository for local Codex and Vercel development.
- Local SQLite/files eliminate the need for a hosting token during local development.
- Local data and hosted data are separate until an explicit, tested sync/export workflow is implemented.
- Keep financial evidence out of public Git. A downloaded project package may include a private data snapshot, guarded by `.gitignore`.
- Store currency amounts as integers; unknown balances are not zero; foreign currencies are excluded from BDT totals.
- Do not convert historical statements, credit repayments or transfers into new spending automatically.
- OCR/PDF extraction is a review aid. Never silently post guessed values.
- Repeated imports use stable IDs and file hashes. The current document-confirm flow supports one reviewed transaction per document; richer statement-line review remains unfinished.
