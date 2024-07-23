from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy data and recommendation function for the example
articles = [
    {'id': 1, 'title': 'Article 1', 'summary': 'Summary 1', 'image': 'article1.jpg'},
    {'id': 2, 'title': 'Article 2', 'summary': 'Summary 2', 'image': 'article2.jpg'},
    # Add more articles as needed
]

def recommend_articles(user_data):
    # Implement your recommendation logic here
    # For simplicity, we return all articles in this example
    return articles

@app.route('/recommendations', methods=['POST'])
def recommendations():
    user_data = request.json
    recommendations = recommend_articles(user_data)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(port=3000)
