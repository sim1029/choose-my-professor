from flask import Flask, request, jsonify

# from flask_cors import CORS, cross_origin
import numpy as np
import pandas as pd

app = Flask(__name__)


@app.before_first_request
def startup():
    global df, df_professors
    url = "https://raw.githubusercontent.com/sim1029/choose-my-professor/main/cmp-ml/data/review_sentiments.csv"
    df = pd.read_csv(url, index_col=0)

    url = "https://raw.githubusercontent.com/sim1029/choose-my-professor/main/cmp-ml/data/professors.csv"
    df_professors = pd.read_csv(url, encoding="ISO-8859-1")


# PARAMS
# course = guid
# professor = guid
@app.route("/comments")
def get_comments():
    global df, df_professors
    args = request.args
    reviews_for_course = df.loc[df["course"] == args["course"]]
    reviews_for_course = reviews_for_course.loc[
        reviews_for_course["prof_id"] == args["professor"]
    ]
    reviews_for_course.sort_values(by="comment_score", inplace=True, ascending=False)
    reviews_for_course = reviews_for_course.reset_index()
    print("sorted df")
    print(reviews_for_course)
    ret = {"positive": [], "negative": []}
    pos_found, neg_found = 0, 0
    for i, row in reviews_for_course.iterrows():
        if pos_found < 2 and row["comment_sent"] == "POS":
            ret["positive"].append(row["comment"])
            pos_found += 1
        if neg_found < 2 and row["comment_sent"] == "NEG":
            ret["negative"].append(row["comment"])
            neg_found += 1
    response = jsonify({"comments": ret})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# PARAMS
# course = guid
@app.route("/professor-for-course")
def get_professors_for_course():
    global df, df_professors
    args = request.args
    reviews_for_course = df.loc[df["course"] == args["course"]]
    response = jsonify({"profs": reviews_for_course.prof_id.unique().tolist()})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# PARAMS
# professor = guid
@app.route("/rating")
def get_rating():
    global df, df_professors
    args = request.args
    rating = df_professors.loc[df_professors["id"] == args["professor"]].rating
    response = jsonify({"rating": rating.to_string().split("   ")[1].replace(" ", "")})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# PARAMS
# professor = guid
@app.route("/url")
def get_url():
    global df, df_professors
    args = request.args
    url = df_professors.loc[df_professors["id"] == args["professor"]].url.iloc[0]
    response = jsonify({"url": url})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# PARAMS
# professor = guid
@app.route("/name")
def get_name():
    global df, df_professors
    args = request.args
    name = df_professors.loc[df_professors["id"] == args["professor"]].name.iloc[0][:-1]
    response = jsonify({"name": name})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


# PARAMS
# professor = guid
# course = guid
@app.route("/tags")
def get_tag_freq():
    global df, df_professors
    args = request.args
    reviews_for_course = df.loc[df["course"] == args["course"]]
    reviews_for_course = reviews_for_course.loc[
        reviews_for_course["prof_id"] == args["professor"]
    ]
    tags = reviews_for_course.combined
    tag_freq = {}
    for row in tags:
        for tag in row.split(","):
            tag = tag.replace("[", "").replace("]", "").replace("'", "")
            if len(tag) > 1:
                tag = tag if tag[0] != " " else tag[1:]
            tag_freq[tag] = 1 if tag not in tag_freq else tag_freq[tag] + 1
    response = jsonify(tag_freq)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
