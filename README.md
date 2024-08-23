Mushroom Edibility Predictor

A Flask web application that predicts whether a mushroom is edible or poisonous based on its features.

Project Overview
  This project is part of a CI assignment where the goal is to build a machine learning model that can predict the edibility of mushrooms. The model is integrated into a Flask web application where users can upload an image of a mushroom, and the application will predict whether the mushroom is edible or poisonous.

Table of Contents

  Project Overview
  Features
  Installation
  Usage
  Model Details
  Limitations
  Contributing


Features
  Image Upload: Upload an image of a mushroom to predict its edibility.
  Prediction Output: Receive a prediction on whether the mushroom is edible or poisonous.
  User-Friendly Interface: Simple and intuitive web interface for easy use.

Installation
  Prerequisites
  Python 3.x
  Pip (Python package manager)
  Virtual environment (optional but recommended)

Steps
Clone the repository:

  git clone https://github.com/yourusername/mushroom-edibility-predictor.git
  cd mushroom-edibility-predictor

Create a virtual environment (optional):

  python -m venv .venv
  source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
  
  Install the dependencies:

pip install -r requirements.txt

Download the trained model:
Place the mushroom_model.pkl file in the project directory. Ensure this file is in the root directory of the project.

Run the Flask application:
python mushroom.py

The application will be running on http://127.0.0.1:5000.

Usage
    Open your web browser and go to http://127.0.0.1:5000.
    Upload an image of a mushroom using the provided upload form.
    Click the "Predict" button.
    The prediction result will be displayed, indicating whether the mushroom is "Edible" or "Poisonous".

Model Details
  The machine learning model used in this project is a Decision Tree Classifier. It was trained on a dataset of mushrooms, with features such as cap shape, cap color, gill size, and more.

Key Libraries Used:
    scikit-learn: For building and training the machine learning model.
    Pillow: For image processing.
    Flask: For building the web application.
    NumPy: For handling numerical data.
