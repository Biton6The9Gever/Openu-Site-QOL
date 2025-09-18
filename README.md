# OpenU Course Table Cleaner  
![License](https://img.shields.io/badge/license-MIT-blue)  
![Chrome Extension](https://img.shields.io/badge/chrome-extension-green)

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
## Usage
Once installed, simply open the Open University course table page.  
The extension will automatically clean the table — no extra steps required.
---
### Live Example

**Before**
![Before](https://github.com/user-attachments/assets/2e91aa8c-0919-42f0-95b0-107f7c21a6a7)

**After**
![After](https://github.com/user-attachments/assets/2a241dad-a25f-4bc4-9495-61a5239beeb4)
---
## Permissions

The extension uses the following permissions:

- `activeTab` – to access and modify the currently active page when the extension runs.
- `Scripting` – to inject the cleaning script into the page.

> These permissions are justified because the extension only modifies the course table content on the Open University site.
---
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

