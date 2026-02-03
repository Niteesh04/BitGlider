# Retro Notes Manager

A local-first personal notes manager with a 1990s desktop UI. Notes are stored in an Excel file and can be exported as password-protected files.

## ✅ Features
- Create, edit, delete notes
- Instant search by title/content
- Excel-backed database (`notes_database.xlsx`)
- Export notes with password-based encryption
- Retro light/dark themes with persistent toggle

## 🧰 Installation

```bash
cd notes_app
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## ▶️ Run the App

```bash
python app.py
```

Then open `http://localhost:5000` in your browser.

## 🗃️ Database
The Excel file is created automatically as `notes_database.xlsx` with columns:

```
ID | Title | Content | DateCreated | LastModified
```

## 🔐 Export Format
Exported notes are encrypted using a password-derived key and saved with:

```
note_<title>.secure
```

The `.secure` file contains the salt and encrypted content.
