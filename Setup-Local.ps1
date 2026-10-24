param([string]$TargetPath, [switch]$SkipInstall)
$ErrorActionPreference = 'Stop'
if (-not $TargetPath) {
  if (Test-Path -LiteralPath 'E:\') { $TargetPath = 'E:\Office\customer_Projects\Naser-Finance-Tasks-Copilot' }
  else { $TargetPath = Join-Path ([Environment]::GetFolderPath('MyDocuments')) 'CodexProjects\Naser-Finance-Tasks-Copilot' }
}
$sourcePath = [IO.Path]::GetFullPath($PSScriptRoot)
$destinationPath = [IO.Path]::GetFullPath($TargetPath)
if ($sourcePath -ne $destinationPath) {
  if ((Test-Path -LiteralPath $destinationPath) -and (Get-ChildItem -LiteralPath $destinationPath -Force | Select-Object -First 1)) {
    throw "Destination already contains files. No changes made. Choose a new -TargetPath: $destinationPath"
  }
  New-Item -ItemType Directory -Path $destinationPath -Force | Out-Null
  Get-ChildItem -LiteralPath $sourcePath -Force | Where-Object { $_.Name -notin @('node_modules','.git','.next','.vercel','.env.local') } | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Recurse -Force
  }
}
foreach ($relativePath in @('.private\data','.private\uploads\documents','.private\imports','.private\receipts','.private\statements','.private\backups')) {
  New-Item -ItemType Directory -Path (Join-Path $destinationPath $relativePath) -Force | Out-Null
}
Set-Location -LiteralPath $destinationPath
if (Get-Command git -ErrorAction SilentlyContinue) {
  if (-not (Test-Path -LiteralPath (Join-Path $destinationPath '.git'))) {
    git init -b local-codex-workspace
    if ($LASTEXITCODE -ne 0) { throw 'Git initialization failed.' }
    git remote add origin 'https://github.com/naserwp/Naser-Finance-Tasks-Copilot.git'
    if ($LASTEXITCODE -ne 0) { throw 'Git remote setup failed.' }
  }
}
if (-not $SkipInstall) {
  if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw "Project copied to $destinationPath. Install Node.js 24 LTS, then run npm install inside that folder." }
  $nodeText = (node --version).Trim().TrimStart('v')
  if ([version]$nodeText -lt [version]'22.13.0') { throw "Project copied to $destinationPath. Node 22.13+ is required; installed $nodeText. Upgrade Node, then run npm install." }
  $npmCommand = Get-Command npm.cmd -ErrorAction SilentlyContinue
  if (-not $npmCommand) { throw "Project copied to $destinationPath. npm.cmd is unavailable; repair the Node installation." }
  & $npmCommand.Source install
  if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed. Project files remain available; review the npm error and retry npm install.' }
}
Write-Host "Project ready at: $destinationPath"
Write-Host 'Open this folder in Codex Desktop. Read AGENTS.md and docs/memory first.'
Write-Host 'Then run npm run dev and open http://127.0.0.1:3000.'
