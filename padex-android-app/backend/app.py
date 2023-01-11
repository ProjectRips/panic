from flask import Flask, request, jsonify
from flask_cors import CORS
from fastai.vision.all import *
import cv2
import socket   

hostname=socket.gethostname()   
IPAddr=socket.gethostbyname(hostname)   

app = Flask(__name__)
cors = CORS(app)
learn = load_learner('backend\\vit_tiny_patch16_224.pkl')

def predict_single(img_file_path):
    'function to take image and return prediction'
    img = cv2.imread(img_file_path)
    prediction, pred_idx, probs = learn.predict(img)
    probability = probs[pred_idx].item()
    return {
        'disease': str(prediction),
        'probs': str(probability)
    }

@app.route("/image", methods=['GET', 'POST'])
def image():
    if(request.method == "POST"):
        bytesOfImage = request.get_data()
        with open('image.jpeg', 'wb') as out:
            out.write(bytesOfImage)
        return jsonify(predict_single('image.jpeg'))


if __name__ == '__main__':
    app.run(host=IPAddr, port=5000)