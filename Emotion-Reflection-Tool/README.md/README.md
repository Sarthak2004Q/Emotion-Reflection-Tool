# Emotion Reflection Tool

A simple web app that takes user text input, sends it to a FastAPI backend for mock emotion analysis, and displays the result.

## 🚀 Technologies Used

- **Frontend:** React + TypeScript + Vite
- **Backend:** FastAPI + Uvicorn

---

## ✨ Features

- Mobile-first clean UI
- Textarea input for reflection
- Loading state on API call
- Displays emotion and confidence

---

## 🔧 Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
