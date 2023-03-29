from bs4 import BeautifulSoup as bs
from os import listdir
from os.path import isfile, join
from stopwatch import Stopwatch
import uuid
import csv

stopwatch = Stopwatch()

files = [f for f in listdir('C:\\Users\\zachh\Pitt\\7 2023 Spring\\CS 1699\\Project\\rmp_files') if isfile(
    join('C:\\Users\\zachh\\Pitt\\7 2023 Spring\\CS 1699\\Project\\rmp_files', f))]

class Professor:
   def __init__(self):
    self.id = uuid.uuid1()
    self.rating = ''
    self.name = ''
    self.would_take_again = ''
    self.level_of_difficulty = ''
    self.department = ''
    self.url = ''
    self.tag0 = ''
    self.tag1 = ''
    self.tag2 = ''
    self.tag3 = ''
    self.tag4 = ''

class Review:
  def __init__(self, prof_id):
    self.id = uuid.uuid1()
    self.prof_id = prof_id
    self.emotion = '' 
    self.comment = ''
    self.timestamp = ''
    self.course = ''
    self.thumbs_up = ''
    self.thumbs_down = ''
    self.quality = ''
    self.difficulty = ''
    self.meta_item0 = ''
    self.meta_item1 = ''
    self.meta_item2 = ''
    self.meta_item3 = ''
    self.meta_item4 = ''
    self.meta_item5 = ''
    self.tag0 = ''
    self.tag1 = ''
    self.tag2 = ''
    self.tag3 = ''
    self.tag4 = ''

def professor_to_tuple(p):
   return (p.id, p.rating, p.name, p.would_take_again, p.level_of_difficulty, p.department, p.url, p.tag0, p.tag1, p.tag2, p.tag3, p.tag4)

def review_to_tuple(r):
   return (r.id, r.prof_id, r.emotion, r.comment, r.timestamp, r.course, r.thumbs_up, r.thumbs_down, r.quality, r.difficulty, r.meta_item0, r.meta_item1, r.meta_item2, r.meta_item3, r.meta_item4, r.meta_item5, r.tag0, r.tag1, r.tag2, r.tag3, r.tag4)

# read in info
professors = []
reviews = []

# files = [files[113]]




for html_file in files:
    with open('rmp_files\\' + html_file, encoding="utf-8") as file:
        data = bs(file.read(), 'html5lib')

        prof = Professor()
        try:
            prof.rating = data.find("div", {"class": lambda L: L and L.startswith('RatingValue__Numerator')}).text
        except:
           print('none found')
        try:
            prof.name = data.find("div", {"class": lambda L: L and L.startswith('NameTitle__Name')}).text
        except:
            print('none found')
        try:
            prof.would_take_again = data.find_all("div", {"class": lambda L: L and L.startswith('FeedbackItem__FeedbackNumber')})[0].text
        except:
            print('none found')
        try:
            prof.level_of_difficulty = data.find_all("div", {"class": lambda L: L and L.startswith('FeedbackItem__FeedbackNumber')})[1].text
        except:
            print('none found')
        try:
            prof.department = data.find("h3", {"class": lambda L: L and L.startswith('SimilarProfessors__SimilarProfessorsTitle')}).text[36:]
        except:
            print('none found')
        try:
            prof.url = data.find("div", {"class": lambda L: L and L.startswith('RatingValue__NumRatings')}).findChild("a")['href']
        except:
            print('none found')
        try:
           prof.tag0 = data.find("div", {"class": lambda L: L and L.startswith('TeacherTags__TagsContainer')}).findChildren()[0].text
           prof.tag1 = data.find("div", {"class": lambda L: L and L.startswith('TeacherTags__TagsContainer')}).findChildren()[1].text
           prof.tag2 = data.find("div", {"class": lambda L: L and L.startswith('TeacherTags__TagsContainer')}).findChildren()[2].text
           prof.tag3 = data.find("div", {"class": lambda L: L and L.startswith('TeacherTags__TagsContainer')}).findChildren()[3].text
           prof.tag4 = data.find("div", {"class": lambda L: L and L.startswith('TeacherTags__TagsContainer')}).findChildren()[4].text
        except:
            print('none found')
        
        professors.append(prof)

        my_list_items = data.find_all("li")
        rating_blocks = []

        for list_item in my_list_items:
            if (len(list_item.findAll("div", {"class": lambda L: L and L.startswith('Comments__StyledComments')})) > 0):
                rating_blocks += list_item

        for b in rating_blocks:

            review = Review(prof.id)
            try:
                review.emotion = b.find("div", {"class": lambda L: L and L.startswith('EmotionLabel')}).text[1:]
            except:
                print('none found')
            try:
                review.comment = b.find("div", {"class": lambda L: L and L.startswith('Comments__StyledComments')}).text
            except:
                print('none found')
            try:
                review.timestamp = b.find("div", {"class": lambda L: L and L.startswith('TimeStamp__StyledTimeStamp')}).text
            except:
                print('none found')
            try:
                review.course = b.find("div", {"class": lambda L: L and L.startswith('RatingHeader__StyledClass')}).text
            except:
                print('none found')
            try:
                review.thumbs_up = b.find_all("div", {"class": lambda L: L and L.startswith('Thumbs__HelpTotal')})[0].text
            except:
                print('none found')
            try:
                review.thumbs_down = b.find_all("div", {"class": lambda L: L and L.startswith('Thumbs__HelpTotal')})[1].text
            except:
                print('none found')
            try:
                review.quality = b.find_all("div", {"class": lambda L: L and L.startswith('CardNumRating__CardNumRatingNumber')})[0].text
            except:
                print('none found')
            try:
                review.difficulty = b.find_all("div", {"class": lambda L: L and L.startswith('CardNumRating__CardNumRatingNumber')})[1].text
            except:
                print('none found')
            try:
                review.meta_item0 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[0].text
                review.meta_item1 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[1].text
                review.meta_item2 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[2].text
                review.meta_item3 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[3].text
                review.meta_item4 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[4].text
                review.meta_item5 = b.find_all("div", {"class": lambda L: L and L.startswith('MetaItem__StyledMetaItem')})[5].text
            except:
                print('none found')
            try:
                review.tag0 = b.find("div", {"class": lambda L: L and L.startswith('RatingTags__StyledTags')}).findChildren()[0].text
                review.tag1 = b.find("div", {"class": lambda L: L and L.startswith('RatingTags__StyledTags')}).findChildren()[1].text
                review.tag2 = b.find("div", {"class": lambda L: L and L.startswith('RatingTags__StyledTags')}).findChildren()[2].text
                review.tag3 = b.find("div", {"class": lambda L: L and L.startswith('RatingTags__StyledTags')}).findChildren()[3].text
                review.tag4 = b.find("div", {"class": lambda L: L and L.startswith('RatingTags__StyledTags')}).findChildren()[4].text
            except:
                print('none found')
            reviews.append(review)

# write out info
with open('professors.csv', 'w') as professors_file:
   writer = csv.writer(professors_file, lineterminator='\n')
   writer.writerow(('id', 'rating', 'name', 'would_take_again', 'level_of_difficulty', 'department', 'url', 'tag0', 'tag1', 'tag2', 'tag3', 'tag4'))
   for p in professors:
      writer.writerow(professor_to_tuple(p))

with open('reviews.csv', 'w') as reviews_file:
   writer = csv.writer(reviews_file, lineterminator='\n')
   writer.writerow(('id', 'prof_id', 'emotion', 'comment', 'timestamp', 'course', 'thumbs_up', 'thumbs_down', 'quality', 'difficulty', 'meta_item0', 'meta_item1', 'meta_item2', 'meta_item3', 'meta_item4', 'meta_item5', 'tag0', 'tag1', 'tag2', 'tag3', 'tag4'))
   for r in reviews:
      writer.writerow(review_to_tuple(r))

stopwatch.stop()
print('time = ' + str(stopwatch))
