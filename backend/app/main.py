from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "NewsByte API Running"
    }