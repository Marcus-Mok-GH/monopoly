# Monopoly — Original Atlantic City Edition

A complete, playable digital version of the classic 1935 Monopoly board game. No build step or dependencies: open `monopoly.html` in a browser and play.

Live on GitHub Pages: https://marcus-mok-gh.github.io/monopoly/
Live on Vercel: https://monopoly-dun.vercel.app

## Files

- `monopoly.html` — self-contained game (HTML, CSS and JavaScript in one file)
- `index.html` + `game.js` — the same game split into source files; `index.html` is what GitHub Pages serves
- `api/ai.js` — Vercel serverless proxy for Pollinations chat completions (keeps the API key off the client)
- `build.py` — regenerates `monopoly.html` from `index.html` + `game.js`; run it after editing either

## Play

Choose 2–8 players and how many are human, then roll, buy, build and trade. The computer opponent takes its turn automatically. An in-game "Classic rules" button explains the rules.

## AI opponents

Bots can think with a language model instead of the built-in heuristic. Pick a brain under "Bot brains" on the New game screen:

- **Built-in strategy (no API)** — the classic heuristic, no network calls
- **Mixed — one model per bot** — each bot gets a different model, so the table plays in different styles
- **GLM 5.3 Flash**, **DeepSeek V4.1 Flash**, **GPT-6 Luna (free)** — every bot uses that model

On the Vercel build the server's own Pollinations key is used (`POLLINATIONS_API_KEY`, a Vercel env var). On GitHub Pages there is no server, so paste your own Pollinations key into the setup screen and the browser calls the API directly.
Two hosted providers run privacy filters that refuse prompts naming another player, and one provider also refuses the street names on the board. Bots on those models are therefore told board numbers and colour groups instead, and are not told who their opponents are.

## Chat turns

The table plays in two kinds of turn. The **game turn** is the usual one — roll, move, buy, build, trade. The **chat turn** sits between the game turns, where the bots talk the board over: each speaker is shown the state of the game, what just happened and what the other bots have already said, and answers with one line of table talk. Lines appear in the game log marked with 💬.

Choose the rhythm on the New game screen:

- **Off** — game turns only
- **After each round** — the bots talk once the table has gone round
- **After every turn** — two bots weigh in between every game turn

A bot on the built-in strategy has no model to think with, so it falls back to a stock line that still fits the position.

## Rules implemented

- 40-square Atlantic City board with original property prices, rents and colours
- Doubles grant another roll; three in a row sends you to jail
- Buying, auctions when a purchase is declined, rent, and doubled rent on unimproved full colour groups
- Railways ($25/$50/$100/$200) and utilities (4× or 10× the dice)
- Houses and hotels with even-build rules, mortgages and unmortgaging with 10% interest
- Player-to-player trading (computer opponents judge offers)
- Chance and Community Chest decks, jail, Get Out of Jail Free cards
- Income Tax ($200 or 10% of total worth), Luxury Tax ($75), $200 for passing GO
- Free Parking pays nothing (as in the original); bankruptcy transfers assets to the creditor; last player standing wins
