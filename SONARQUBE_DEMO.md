# SonarQube Demo (Local + SonarCloud)

This repo contains a small, intentionally-problematic TypeScript file that helps demonstrate what SonarQube / SonarCloud detects across:

- **Software Quality domains**: Security, Reliability, Maintainability
- **Issue types**: Vulnerabilities, Bugs, Code Smells, Security Hotspots
- **Severity levels**: Blocker, Critical, Major, Minor, Info

The goal is to generate a repeatable set of findings you can walk through in the Sonar UI.

## Where the demo issues live

- Demo source file: `src/sonar-demo/sonarIssues.ts`
- This file is **not imported** by the application (so it shouldn’t impact runtime behavior), but it _is_ under `src/`, so it will be analyzed by Sonar based on `sonar.sources=src`.

## What to show in SonarQube / SonarCloud UI

### 1) Security

Look for findings that typically land under **Vulnerabilities** or **Security Hotspots**, for example:

- Dynamic code execution patterns (example: `eval`)
- OS command execution with user-controlled input (example: `child_process.exec`)
- Weak cryptography / hashing choices (example: `md5`)
- Weak randomness for security-sensitive tokens (example: `Math.random()`)
- Hard-coded secrets (example: `HARDCODED_API_KEY`)

### 2) Reliability

Look for **Bugs** such as:

- Code paths that can throw unexpectedly (example: unguarded `JSON.parse`)
- Misleading / unsafe assumptions about input

### 3) Maintainability

Look for **Code Smells** such as:

- Duplicated logic
- Needlessly complex / deeply nested conditionals
- “Magic values” / hard-coded strings

## Severity mapping (what to say in the demo)

Sonar uses: **Blocker / Critical / Major / Minor / Info**.

If your audience thinks in “High / Medium / Low / Info”, a common mapping is:

- High ≈ Blocker + Critical
- Medium ≈ Major
- Low ≈ Minor
- Info ≈ Info

Note: exact severity depends on the **Quality Profile** and the specific rule.

## How to run the analysis

### Option A — Local SonarQube (Docker)

Run your local scan the same way as in the spike (server URL + token). The scanner should pick up `src/sonar-demo/sonarIssues.ts` automatically.

### Option B — SonarCloud (GitHub Actions)

Push this branch and open a PR. The workflow in `.github/workflows/main.yml` runs the scan and publishes results to SonarCloud.

Important: SonarCloud **Automatic Analysis** must be disabled when using CI-based analysis, otherwise you’ll get a conflict.

## Cleanup

This demo file is intentionally “bad.” Once the demo is done, you can remove:

- `src/sonar-demo/sonarIssues.ts`
- This document (`SONARQUBE_DEMO.md`)
