#!/usr/bin/env python3
"""Regenerate monopoly.html — the self-contained copy of the game.

index.html holds the markup and the stylesheet and links game.js; monopoly.html
is the same game with the script inlined so the board can be opened straight
from disk or served as a single file. Edit index.html and game.js, then run:

    python3 build.py
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parent
MARKER = '<script src="game.js"></script>'


def main() -> None:
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    js = (ROOT / "game.js").read_text(encoding="utf-8")
    if MARKER not in html:
        raise SystemExit("index.html no longer links game.js — update build.py")
    out = html.replace(MARKER, "<script>\n" + js.rstrip("\n") + "\n\n</script>")
    (ROOT / "monopoly.html").write_text(out, encoding="utf-8")
    print("wrote monopoly.html")


if __name__ == "__main__":
    main()
