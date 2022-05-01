import {Router, Request, Response} from 'express';

let moviesRouter: Router = Router();

moviesRouter.get('/', (req: Request, res: Response) => {
    res.json({
        
    });
});

export default moviesRouter;