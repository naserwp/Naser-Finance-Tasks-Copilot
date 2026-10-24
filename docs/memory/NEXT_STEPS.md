# Next steps

1. Run Setup-Local.ps1 on the owner's Windows PC; open the resulting folder in Codex Desktop. This folder was prepared remotely; do not report that it already exists on the PC until verified there.
2. Run `npm run dev`; verify local overview, saving, reload persistence, file upload/readback, duplicate detection and document review on localhost.
3. Ask the owner to upload unlocked PDFs for statements that could not be downloaded through the email connector. Confirm candidate accounts, replacement cards and historical savings plans.
4. Reconcile transactions from reviewed statements and income/DPS evidence. Add multi-row statement review with source and cross-document deduplication before claiming automatic reconciliation.
5. Verify camera capture and PDF/OCR on the owner's phone, including a wrong-password PDF and poor-quality receipt.
6. Complete the Vercel private backend connection only after the required access approval. Verify that anonymous requests cannot read or write data.
7. Decide on a standalone hosted database and file store if replacing the original Site backend. Preserve all existing records and document IDs in a reversible migration.
8. Add a tested backup/restore and explicit local/hosted synchronization workflow before treating either copy as a unified live ledger.
