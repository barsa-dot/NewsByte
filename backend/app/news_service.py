import requests
from app.config import NEWS_API_KEY

def fetch_news():
    url = (
        f"https://newsapi.org/v2/top-headlines?"
        f"country=us&apiKey={NEWS_API_KEY}"
    )

    response = requests.get(url)

    if response.status_code == 200:
        return response.json()["articles"]

    return []