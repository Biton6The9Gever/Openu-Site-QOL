# OpenU Course Table Cleaner

**OpenU Course Table Cleaner** is a Google Chrome extension that removes canceled or replaced courses from the Open University course table. This makes it easier to focus only on your active courses.

---

## Features

- Automatically removes rows marked as canceled or replaced from the course table.
- Lightweight and fast — runs directly in your browser.
- Works dynamically on the Open University course table page.

---

## Installation (Developer Mode)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extension folder.
5. Open the Open University course table page and the extension will clean the table automatically.

---

## Permissions

The extension uses the following permissions:

- `activeTab` – to access and modify the currently active page when the extension runs.
- `Scripting` – to inject the cleaning script into the page.

> These permissions are justified because the extension only modifies the course tabl
