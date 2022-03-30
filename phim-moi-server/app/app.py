from flask import Flask, jsonify, request
import random

app = Flask(__name__,
            static_folder='static',
            static_url_path='/static')

IMG_PATH = '/static/img'
VIDEO_PATH = '/static/video'

@app.route('/')
def index():
    pass


@app.route('/api/movie/<videoID>')
def show_movie_detail(videoID):
    return jsonify({
        'content': {
            'src': f'{VIDEO_PATH}/{videoID}.mp4'
        }
    })


@app.route('/api/movies')
def movie():
    return jsonify({
        'content': [
            {
                'id': '1',
                'title': 'Spider Man: Homecoming',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman1.jpg'
            },
            {
                'id': '2',
                'title': 'Spider Man: Far from home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman2.jpg'
            },
            {
                'id': '3',
                'title': 'Spider Man: No way home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman3.jpg'
            },
            {
                'id': '4',
                'title': 'Dune',
                'author': 'Warner Bros. Picture',
                'cover': IMG_PATH + '/dune.jpg'
            },
            {
                'id': '5',
                'title': 'Arcane',
                'author': 'Riot',
                'cover': IMG_PATH + '/arcane.jpg'
            },
            {
                'id': '6',
                'title': 'Kimetsu no Yaiba',
                'author': 'Gotouge Koyoharu',
                'cover': IMG_PATH + '/kimetsunoyaiba.jpg'
            },
            {
                'id': '7',
                'title': 'Jujutsu Kaisen',
                'author': 'Seong-Hu Park',
                'cover': IMG_PATH + '/jujutsukaisen.jpg'
            },
        ]
    })
