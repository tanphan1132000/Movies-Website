class moviesController {
    movie(req, res) {
        res.json({
            'content': [
                {
                    'id': '1',
                    'title': 'Spider Man: Homecoming',
                    'author': 'Marvel Studio',
                    'cover':'/spiderman1.jpg'
                },
                {
                    'id': '2',
                    'title': 'Spider Man: Far from home',
                    'author': 'Marvel Studio',
                    'cover':'/spiderman2.jpg'
                },
                {
                    'id': '3',
                    'title': 'Spider Man: No way home',
                    'author': 'Marvel Studio',
                    'cover':'/spiderman3.jpg'
                },
                {
                    'id': '4',
                    'title': 'Dune',
                    'author': 'Warner Bros. Picture',
                    'cover':'/dune.jpg'
                },
                {
                    'id': '5',
                    'title': 'Arcane',
                    'author': 'Riot',
                    'cover':'/arcane.jpg'
                },
                {
                    'id': '6',
                    'title': 'Kimetsu no Yaiba',
                    'author': 'Gotouge Koyoharu',
                    'cover':'/kimetsunoyaiba.jpg'
                },
                {
                    'id': '7',
                    'title': 'Jujutsu Kaisen',
                    'author': 'Seong-Hu Park',
                    'cover':'/jujutsukaisen.jpg'
                },
            ]
        })
    }
}

module.exports = new moviesController