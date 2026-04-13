# AAC board files (OBF / OBZ)

This folder stores downloadable AAC board content used by:
- `en/boards.html` — links to **`talking_buttons_en_v_1.1.obz`** (bundle of English `.obf` boards)
- `ru/boards.html` — links to **`talking_buttons_ru_v_1.1.obz`** (bundle of Russian `.obf` boards)

Individual `.obf` sources remain here for editing; the site board library publishes the OBZ bundles only.

## Naming
- Use kebab-case names for per-board `.obf` files.
- RU-localized variants use `-ru` suffix (example: `quick-starter-ru.obf`).
- Rebuild language bundles after editing boards (OBZ with `manifest.json`, POSIX `boards/...` paths, UTF-8 without BOM).

## Process
1. Edit board JSON (`.obf`).
2. Update `BOARD_CHANGELOG.md`.
3. Regenerate `talking_buttons_en_v_1.1.obz` / `talking_buttons_ru_v_1.1.obz` as needed.
4. Confirm board library pages still point at the correct bundle filenames.

