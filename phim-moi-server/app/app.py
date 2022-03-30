from flask import Flask, jsonify, request
import random 

app = Flask(__name__,
            static_folder='static',
            static_url_path='/static')

IMG_PATH = '/static/img'

@app.route('/')
def index():
    pass 

@app.route('/api/movie/<name>')
def show_movie_detail(name):
    return jsonify({
        'content' : {
            'name' : name
        }
    })

@app.route('/api/movies')
def movie():
    return jsonify({
        'content': [
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Spider Man: No way home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman3.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Spider Man: Far from home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman2.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Spider Man: Homecoming',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman1.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Dune',
                'author': 'Warner Bros. Picture',
                'cover': IMG_PATH + '/dune.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Arcane',
                'author': 'Riot',
                'cover': IMG_PATH + '/arcane.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Kimetsu no Yaiba',
                'author': 'Gotouge Koyoharu',
                'cover': IMG_PATH + '/kimetsunoyaiba.jpg'
            },
            {
                'id' : str(random.randrange(10e10)),
                'title': 'Jujutsu Kaisen',
                'author': 'Seong-Hu Park',
                'cover': IMG_PATH + '/jujutsukaisen.jpg'
            },
        ]
    })
