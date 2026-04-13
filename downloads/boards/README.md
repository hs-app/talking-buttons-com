# AAC board files (OBF)

This folder stores downloadable AAC board files used by:
- `en/boards.html`
- `ru/boards.html`

## Naming
- Use kebab-case names that match board table entries.
- Current format target: `.obf` (JSON).
- RU-localized variants use `-ru` suffix (example: `quick-starter-ru.obf`).

## Process
1. Edit board JSON.
2. Update `BOARD_CHANGELOG.md`.
3. Verify EN/RU table rows still align.
4. Verify RU page links point to `-ru.obf` files.

