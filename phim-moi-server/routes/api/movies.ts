import {Router, Request, Response} from 'express';

let moviesRouter: Router = Router();

moviesRouter.get('/', (req: Request, res: Response) => {
    res.json({
        'content': [{
            'id': 1,
            'cover': '/static/img/dune.jpg',
            'author': 'Thang Tran',
            'title': 'Dune'
        }]
    });
});

export default moviesRouter;