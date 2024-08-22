from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import os
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib
from PIL import Image
import numpy as np
import io

app = Flask(__name__)

# Load model
model = joblib.load('mushroom_model.pkl')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['image']
    filename = secure_filename(file.filename)
    file_path = os.path.join('static/uploads', filename)
    file.save(file_path)

    # Process the image and make a prediction
    img = Image.open(file_path).convert('RGB')
    img = img.resize((64, 64))  # Resize to model's input size
    img_array = np.array(img).flatten().reshape(1, -1)  # Flatten the image for prediction

    prediction = model.predict(img_array)

    result = 'Edible' if prediction[0] == 0 else 'Poisonous'
    return jsonify({'prediction': result})


if __name__ == '__main__':
    app.run(debug=True)
