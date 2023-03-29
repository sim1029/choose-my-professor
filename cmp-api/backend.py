from flask import Flask
from flask_restful import Api, Resource, reqparse
import numpy as np
import pandas as pd

app = Flask(__name__)  
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('course')
parser.add_argument('professor')

# PARAMS
# course = guid
# professor = guid
class GetComments(Resource):
    def get(self):
        args = parser.parse_args()
        reviews_for_course = df.loc[df['course'] == ' ' + args['course']]
        reviews_for_course = reviews_for_course.loc[reviews_for_course['prof_id'] == args['professor']]
        return reviews_for_course.comment.tolist()

# PARAMS
# course = guid
class GetProfessorsForACourse(Resource):
    def get(self):
        args = parser.parse_args()
        reviews_for_course = df.loc[df['course'] == ' ' + args['course']]
        return reviews_for_course.prof_id.unique().tolist()

# PARAMS
# professor = guid
class GetRating(Resource):
    def get(self):
        args = parser.parse_args()
        rating = df_professors.loc[df_professors['id'] == args['professor']].rating
        return rating.to_string().split('   ')[1].replace(' ', '')
    
# PARAMS
# professor = guid
class GetUrl(Resource):
    def get(self):
        args = parser.parse_args()
        url = df_professors.loc[df_professors['id']== args['professor']].url.iloc[0]
        return url
    
# PARAMS
# professor = guid
class GetName(Resource):
    def get(self):
        args = parser.parse_args()
        url = df_professors.loc[df_professors['id']== args['professor']].name.iloc[0][:-1]
        return url
    
# PARAMS
# professor = guid
# course = guid
class GetTagFreq(Resource):
    def get(self):
        args = parser.parse_args()
        reviews_for_course = df.loc[df['course'] == ' ' + args['course']]
        reviews_for_course = reviews_for_course.loc[reviews_for_course['prof_id']== args['professor']]
        tags = reviews_for_course.combined
        print(tags)
        tag_freq = {}
        for row in tags:
            for tag in row.split(","):
                tag = tag.replace('[', '').replace(']', '').replace('\'', '')
                if (len(tag) > 1):
                    tag = tag if tag[0] != ' ' else tag[1:]
                tag_freq[tag] = 1 if tag not in tag_freq else tag_freq[tag] + 1
        return tag_freq


api.add_resource(GetComments, '/comments')
api.add_resource(GetProfessorsForACourse, '/professor-for-course')
api.add_resource(GetRating, '/rating')
api.add_resource(GetUrl, '/url')
api.add_resource(GetName, '/name')
api.add_resource(GetTagFreq, '/tags')

if __name__ == '__main__': 
    url = 'https://raw.githubusercontent.com/sim1029/choose-my-professor/alex-ml/cmp-ml/data/predicted_reviews3.csv'
    df = pd.read_csv(url, index_col=0)

    url = 'https://raw.githubusercontent.com/sim1029/choose-my-professor/main/cmp-ml/data/professors.csv'
    df_professors = pd.read_csv(url, encoding="ISO-8859-1")
    app.run(debug=True)