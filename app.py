from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/detect-ingredients', methods=['POST'])
def detect_ingredients():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    # Mock AI response
    ingredients = ['tomato', 'onion', 'chicken']
    return jsonify({'ingredients': ingredients})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
