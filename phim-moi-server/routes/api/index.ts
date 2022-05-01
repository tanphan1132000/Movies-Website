import { Router } from "express";
import moviesRouter from './movies';
import usersRouter from './users';

let apiRouter: Router = Router();

apiRouter.use('/movies', moviesRouter);
apiRouter.use('/', usersRouter);

export default apiRouter;