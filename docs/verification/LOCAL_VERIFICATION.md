# Local verification checkpoint

Verified in the build workspace, not on the owner's Windows PC:

- Native Next.js production build and TypeScript checks passed.
- Node built-in SQLite runtime available.
- Local account create and read passed.
- Negative-amount validation and mismatching-origin rejection passed.
- PDF upload and byte-for-byte readback passed.
- Exact duplicate upload detection passed.
- Repeated document confirmation produced only one ledger transaction.
- Saved records remained after stopping and restarting the local server.
- Full private snapshot import and six PDF readbacks were checked separately.
- `.private/` and environment files are ignored by Git and excluded from deployment tracing.

Not verified on the owner's Windows PC: PowerShell execution policy, installed Node/Git paths, camera capture, local Codex Desktop registration, phone access, PDF password entry and OCR accuracy. The setup script was reviewed but could not be executed under Windows in this environment.

The Vercel private data connection is still a separate unfinished task. This local setup does not enable it or synchronize data automatically.
