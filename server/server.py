from flask import Flask
import json
frpm data import catalog

app = Flask(__name__)


@app.get("/")
def home():
    return "Hello from server"


@app.get("/test")
def test():
    return "This is another page"

@app.get ('/api')


app.run(debug=True)