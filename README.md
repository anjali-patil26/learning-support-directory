# Learning Support Provider Directory

This React project was created as part of a UI/UX Developer hiring assignment.

It showcases a clean, responsive directory of learning support providers with the ability to view details and add new entries locally.

---

## ✨ Features

- 📋 Displays a list of learning support providers
- 🔍 Provider detail page (`/providers/:id`)
- ➕ Add new provider using form
- 💾 Saves new providers using `localStorage`
- 🎨 Styled using **Tailwind CSS**
- 💡 Simulates an API using static JSON data

---

## 📁 Folder Structure

src/
├── components/
│ ├── Header.js
│ ├── Sidebar.js
│ ├── AddProviderForm.js
│ └── ProviderTable.js
├── pages/
│ ├── ProviderList.js
│ └── ProviderDetail.js
├── data/
│ └── providers.json
├── App.js
├── index.js
└── index.css

yaml
Copy
Edit

---

## 🧑‍💻 Tech Stack

- React (with Hooks)
- React Router
- Tailwind CSS
- JSON as fake API
- LocalStorage

---

## ▶️ How to Run Locally

```bash
npm install
npm start
```
