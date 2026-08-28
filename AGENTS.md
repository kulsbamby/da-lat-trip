# Collaboration Boundaries

## Content updates: Antigravity

- Update only trip facts and copy: entries in `scheduleData`, labels, descriptions, hotel/VF3/checklist/calendar data.
- Keep all five day tabs: 17, 18, 19, 20, and 21 September.
- Every schedule item must retain `time`, `title`, `location`, `note`, and `tag`. `time` must begin with a 24-hour `HH:MM` value so the UI can classify it correctly.
- Do not delete or replace `tagTone`, `periodForTime`, or `renderTimeline` in `script.js`.
- Do not change timeline markup/classes (`timeline-period-group`, `period-morning`, `period-afternoon`, `period-evening`, `timeline-pill-tag`) or presentation rules in `styles.css`.

## UI updates: Codex

- Owns `styles.css` and the rendering structure in `script.js`.
- Preserves the content supplied in `scheduleData` when improving the interface.

## Shared rule

- If a content change requires a structural or visual change, stop at the data/copy change and request a UI handoff rather than rewriting UI code.
