import { Request } from 'express';
import {expressjwt} from 'express-jwt';
import { secret } from '../config';

function getTokenFromHeader(req: Request) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return new Promise<string>(() => "Error");
}

let auth = {
    required: expressjwt({
        algorithms: ['HS256'],
        secret: secret as any,
        getToken: getTokenFromHeader
    }),
    optional: expressjwt({
        algorithms: ['HS256'],
        secret: secret as any,
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

export default auth;