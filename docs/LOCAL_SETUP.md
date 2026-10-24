# Windows / Codex Desktop setup

Recommended destination: `E:\Office\customer_Projects\Naser-Finance-Tasks-Copilot`. If E: is unavailable, the setup script defaults to `Documents\CodexProjects\Naser-Finance-Tasks-Copilot`.

1. Download and extract the project package.
2. Open PowerShell inside the extracted project folder. Run `Unblock-File .\Setup-Local.ps1` if Windows marks the downloaded script as blocked, then run `.\Setup-Local.ps1`.
3. The script creates a NEW destination, copies source and any included private snapshot, initializes Git when available, checks Node and installs dependencies. It will not overwrite a non-empty existing project folder.
4. In Codex Desktop, use **Open folder** and select the resulting destination. A remote ChatGPT session cannot register this local Codex Desktop folder for you.
5. Start with: “Read AGENTS.md and docs/memory. Continue this project and verify the local app.”
6. Run `npm run dev` in that folder. Open http://127.0.0.1:3000.

Node 22.13 or newer is required. Node 24 LTS is recommended. Node's built-in SQLite may print an experimental warning; the app uses it for local persistence. If Node is missing/old, setup leaves the copied project in place and explains what to install. No administrator rights or global packages are required by the script.

`.private/` contains private financial data. Keep the ZIP and this folder private. It is ignored by Git. To back up local data, stop the app and copy `.private/` to a private backup location. Do not copy only the SQLite main file while the app is running, because WAL files may contain recent writes.

The local copy does not automatically synchronize with the original Site or Vercel. Do not enter the same real transaction independently into both copies and later merge without deduplication.
