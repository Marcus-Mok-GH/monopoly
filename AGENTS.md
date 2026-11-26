# Monopoly — Original Atlantic City Edition

Static browser game (no build step, no dependencies). Open `index.html` in a browser to play.

## Files
- `index.html` + `game.js` + `styles.css` — the game as served (GitHub Pages and Vercel both serve this)
- `monopoly.html` — self-contained single-file version (same game, CSS/JS inlined); regenerate with `python3 build.py` after editing `index.html` or `game.js`
- `api/ai.js` — Vercel serverless proxy for Pollinations; reads `POLLINATIONS_API_KEY` from the env, 404s when unset so the client falls back to the built-in strategy
- `vercel.json` — static output config (`outputDirectory: "."`, `cleanUrls: true`)

## Live URLs
- GitHub Pages: https://marcus-mok-gh.github.io/monopoly/
- Vercel: https://monopoly-dun.vercel.app

## Deploying
GitHub Pages and Vercel are both wired to the `main` branch of
https://github.com/Marcus-Mok-GH/monopoly — pushing to `main` deploys to both
(Vercel auto-deploy is connected to the GitHub repo; production branch `main`).

Manual Vercel deploy:
```
cd Projects/Monopoly
vercel deploy --prod --yes --scope sjdjdiejdrirhdkjejs-projects --name monopoly
```
`--scope` is required (the CLI has two teams and will not auto-select), and the
project name must be lowercase.

## AI bots
- Bots pick a brain in the New game screen: built-in strategy, one shared model, or "Mixed" (one model per bot, assigned round-robin from `AI_LLM_MODELS`).
- `aiConfig(p)` resolves the model per bot from `p.botModel`; `botBrainLabel(p)` shows it in the player list.
- Some hosted providers refuse prompts that name another player or use the board's street names. Those models get board numbers and colour groups instead of street names, and no opponent information at all — see `NO_RIVALS_MODELS` and `rivalsAllowed()`.
- `llmDecision()` accepts JSON or prose, and retries with a blander prompt when the first answer is unusable.

## Notes
- The Vercel project is `monopoly` under scope `sjdjdiejdrirhdkjejs-projects`; the account also has a second team (`pluh`) — do not deploy there by accident.
- With `cleanUrls: true`, `/monopoly.html` 308-redirects to `/monopoly`.
