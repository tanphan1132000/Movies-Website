from flask import Flask, jsonify

app = Flask(__name__,
            static_folder='static',
            static_url_path='/static')

IMG_PATH = '/static/img'

@app.route('/')
def index():
    pass 

@app.route('/api/movie')
def movie():
    return jsonify({
        'content': [
            {
                'title': 'Spider Man: No way home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman3.jpg'
            },
            {
                'title': 'Spider Man: Far from home',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman2.jpg'
            },
            {
                'title': 'Spider Man: Homecoming',
                'author': 'Marvel Studio',
                'cover': IMG_PATH + '/spiderman1.jpg'
            },
            {
                'title': 'Dune',
                'author': 'Warner Bros. Picture',
                'cover': IMG_PATH + '/dune.jpg'
            },
            {
                'title': 'Arcane',
                'author': 'Riot',
                'cover': IMG_PATH + '/arcane.jpg'
            },
            {
                'title': 'Kimetsu no Yaiba',
                'author': 'Gotouge Koyoharu',
                'cover': IMG_PATH + '/kimetsunoyaiba.jpg'
            },
            {
                'title': 'Jujutsu Kaisen',
                'author': 'Seong-Hu Park',
                'cover': IMG_PATH + '/jujutsukaisen.jpg'
            },
        ]
    })
