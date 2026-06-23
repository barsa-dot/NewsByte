import requests
from app.config import NEWS_API_KEY

def fetch_news():
    url = (
        f"https://newsapi.org/v2/top-headlines?"
        f"country=us&apiKey={NEWS_API_KEY}"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return []

    articles = response.json()["articles"]

    cleaned_articles = []

    for article in articles:
        cleaned_articles.append({
            "title": article.get("title"),
            "source": article.get("source", {}).get("name"),
            "image": article.get("urlToImage"),
            "url": article.get("url"),
            "publishedAt": article.get("publishedAt")
        })

    return cleaned_articles