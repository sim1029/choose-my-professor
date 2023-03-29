from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
import numpy as np
import pandas as pd
import json

# initiates the flask app and API

app = Flask(__name__)  
api = Api(app)



#serving ML model sends data in JSON format, and we ask parser to look for data contained in the request
parser = reqparse.RequestParser()
parser.add_argument('course')

# class Prof:
#     def __init__(self):
#         self.prof = ""
#     def toJSON(self):
#         return json.dumps(self, default=lambda o: o.__dict__,
#                           sort_keys=True, indent=4)

#we are changing the post method in the ReviewsClassifier class that we imported from flask-restful so that we can tell the REST API how to use model to make 
#predictions based off given data. URL for our ML model is something like http://127.0.0.1:5000/reviews, when running locally now

class Professor:
    def __init__(self, name):
        self.name = name
        self.tags = {}
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,
                          sort_keys=True, indent=4)

class ReviewsClassifier(Resource):
    def get(self):
        args = parser.parse_args()
        reviews_for_course = df.loc[df['course'] == ' ' + args['course']]
        professor_id_list = reviews_for_course.prof_id.unique()
        professor_dict = {}
        # return (df_professors.head(1).to_json())

        for i, review in reviews_for_course.iterrows():
            if review.prof_id not in professor_dict:
                professor_dict[review.prof_id] = Professor(
                    df_professors.loc[df_professors['id'] == review.prof_id].name)

            mini_list = review.combined.replace('\'', "").replace('(', "").replace(')', "").replace('[', "").replace(']', "").replace('\"', "").split(",")
            for element in mini_list:
                professor_dict[review.prof_id].tags[element] = 1 if element not in professor_dict[review.prof_id].tags else professor_dict[review.prof_id].tags[element] + 1

        # for i, review in reviews_for_course.iterrows():
        #     if review.prof_id not in professor_dict:
        #         professor_dict[review.prof_id] = {}

        #     mini_list = review.combined.replace('\'', "").replace('(', "").replace(')', "").replace('[', "").replace(']', "").replace('\"', "").split(",")
        #     for element in mini_list:
        #         professor_dict[review.prof_id][element] = 1 if element not in professor_dict[review.prof_id] else professor_dict[review.prof_id][element] + 1

        # data = [Prof()] * len(professor_list)

        # for i in range(len(data)):
        #     data[i].prof_id = professor_list[i]
        #     data[i].tag_freq = {}

        # for j in range(len(data)):
        #     prof = data[j]
        #     for i, row in reviews_for_course.iterrows():
        #         if (prof.prof_id == row.prof_id):
        #             mini_list = row.combined.replace('\'', "").replace(
        #                 '(', "").replace(')', "").replace('[', "").replace(']', "").replace('\"', "").split(",")
        #             for item in mini_list:
        #                 data[j].tag_freq[item] = 1 if item not in data else data[item] + 1

        # return jsonify(data[1].toJSON())
        # return jsonify(reviews_for_course.to_json())
        # return jsonify(professor_dict['1bfaf708-ba04-11ed-b4e7-a4c3f0856cc6'].__dict__)
        return json.dumps(professor_dict['1bfaf708-ba04-11ed-b4e7-a4c3f0856cc6'])
        # return jsonify("yeet")


api.add_resource(ReviewsClassifier, '/reviews')

#loading model that we just saved so that the application knows where to get the model that it'll post
if __name__ == '__main__': 
    url = 'https://raw.githubusercontent.com/sim1029/choose-my-professor/47b1a22f202a070febe63201a179c2a123b9f7d2/cmp-ml/data/predicted_reviews2.csv'
    df = pd.read_csv(url, index_col=0)

    url = 'https://raw.githubusercontent.com/sim1029/choose-my-professor/main/cmp-ml/data/professors.csv'
    df_professors = pd.read_csv(url, encoding="ISO-8859-1")
    app.run(debug=True)