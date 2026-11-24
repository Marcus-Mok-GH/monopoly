# Monopoly — Original Atlantic City Edition

A complete, playable digital version of the classic 1935 Monopoly board game. No build step or dependencies: open `monopoly.html` in a browser and play.

Live on GitHub Pages: https://marcus-mok-gh.github.io/monopoly/

## Files

- `monopoly.html` — self-contained game (HTML, CSS and JavaScript in one file)
- `index.html` + `game.js` — the same game split into source files; `index.html` is what GitHub Pages serves

## Play

Choose 2–8 players and how many are human, then roll, buy, build and trade. The computer opponent takes its turn automatically. An in-game "Classic rules" button explains the rules.

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
