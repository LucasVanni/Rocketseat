import { Request, Response, NextFunction, request } from 'express';

import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthentication(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    // Validação do token JWT
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error('Token is missing');
    }

    // Bearer token
    const [, token] = authHeader.split(' ');

    const { subject } = authConfig.jwt;

    try {
        // as Força um tipo de variável
        const { sub } = verify(token, subject) as TokenPayload;

        request.user = { id: sub };

        return next();
    } catch {
        throw new Error('Invalid JWT token');
    }
}
