from fastapi import FastAPI
from app.news_service import fetch_news

app = FastAPI()

@app.get("/")
def home():
    return {"message": "NewsByte API Running"}

@app.get("/news")
def get_news():
    return fetch_news()