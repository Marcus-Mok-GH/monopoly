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

## Chat turns
- The game plays two kinds of turn: the game turn (roll, move, buy, build) and the chat turn, where the bots talk the board over.
- `endTurn()` marks the end of a game turn; `nextPlayer()` runs a chat turn when `chatDue()` is true, then calls `advancePlayer()` to move the game on.
- `chatMode` is set on the New game screen: `off`, `round` (after each round), `turn` (after every turn) or `always` (the table never stops talking). It is saved in `localStorage` with the other AI settings.
- `aiChatLine()` asks for one line of table talk as JSON (`{"say":"..."}`); `extractSay()` also copes with prose and quoted answers.
- Chat lines go into the log with the chat flag, which styles them apart from the game log (`#log .chat` in `index.html`).
- Chat prompts use the same redaction as the decision prompts: street names become board numbers and colour groups, and player names become seat letters for `NO_RIVALS_MODELS`.
- The chat prompts need a 4000-token budget — the small hosted models think out loud before answering.
- The bots speak in seat order: `nextChatSpeaker()` hands the table to the next bot and wraps back to the first one, so The Shoe is followed by Mr. Monopoly.
- `always` mode runs `chatAutoLoop()` — a background loop that speaks one line every few seconds whatever turn it is, without waiting for the game. `chatDue()` returns false in that mode so the between-turn chat does not double up.
- `S.promptPending` is set while `ask()` waits for the player. Chat must never paint the action panel while that flag is set, or the pending buttons die and the game deadlocks.

## Notes
- The Vercel project is `monopoly` under scope `sjdjdiejdrirhdkjejs-projects`; the account also has a second team (`pluh`) — do not deploy there by accident.
- With `cleanUrls: true`, `/monopoly.html` 308-redirects to `/monopoly`.
