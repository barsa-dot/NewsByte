# 📰 NewsByte

NewsByte is a lightweight news aggregation web application that fetches and displays the latest headlines from multiple news sources in a clean, responsive interface. The project consists of a FastAPI backend that serves news data and a React + Vite frontend that presents the articles in an intuitive card-based layout.

## 🚀 Live Demo

**Frontend:**  
https://news-byte-frontend.vercel.app

**Backend API:**  
https://news-byte-eight.vercel.app

## ✨ Features

- Latest news headlines
- Responsive and modern UI
- FastAPI REST API backend
- React + Vite frontend
- Axios-based API integration
- Deployed on Vercel

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python
- News API integration

## 📂 Project Structure

```
NewsByte/
│
├── backend/
│   ├── app/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## ⚙️ Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs on:

```
http://localhost:8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

## 📡 API Endpoint

```
GET /news
```

Returns a JSON array of the latest news articles.

Example:

```json
[
  {
    "title": "...",
    "source": "...",
    "image": "...",
    "url": "...",
    "publishedAt": "..."
  }
]
```

## 📄 License

This project was developed for learning and educational purposes.
