from fastapi import FastAPI
from app.news_service import fetch_news
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "NewsByte API Running"}

@app.get("/news")
def get_news():
    return fetch_news()