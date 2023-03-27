from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
import numpy as np
import json
import pickle 

# initiates the flask app and API

app = Flask(__name__)  
api = Api(app)

#serving ML model sends data in JSON format, and we ask parser to look for data contained in the request
parser = reqparse.RequestParser()
parser.add_argument('data')


#we are changing the post method in the ReviewsClassifier class that we imported from flask-restful so that we can tell the REST API how to use model to make 
#predictions based off given data. URL for our ML model is something like http://127.0.0.1:5000/reviews, when running locally now
class ReviewsClassifier(Resource):
    def post(self):
        args = parser.parse_args()
        X = np.array(json.loads(args['data']))
        prediction = model.predict(X)
        return jsonify(prediction.tolist())

api.add_resource(ReviewsClassifier, '/reviews')

#loading model that we just saved so that the application knows where to get the model that it'll post
if __name__ == '__main__': 
  # Load model
    with open('model.pickle', 'rb') as f:
        model = pickle.load(f)

    app.run(debug=True)


# loads data for the REST API 
reviews = load_reviews()

# serializes the data in Alex's xtrain variable, so that you can send the request to the model 

payload = {'data': json.dumps(xtrain.tolist())}
y_predict = requests.post('http://127.0.0.1:5000/reviews', data=payload).json()

