import express, { Express, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import {secret} from './config';
import './config/passport';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(session({ secret: secret, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

app.use(router);

app.use((req: Request, res: Response, next: NextFunction) => {
    let err: Error = new Error('Not found!');
    res.status(404);
    next(err);
});


// TODO: Defer server to start until successfully connect to db
mongoose.connect(process.env.MONGODB_URI!, () => {
    console.log(`⚡️[server]: Connected to database at ${process.env.MONGODB_URI}`);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});