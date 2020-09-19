import { Request, Response, NextFunction, request } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthentication(
    req: Request,
    _res: Response,
    next: NextFunction,
): void {
    // Validação do token JWT
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token is missing', 401);
    }

    // Bearer token
    const [, token] = authHeader.split(' ');

    const { subject } = authConfig.jwt;

    try {
        // as Força um tipo de variável
        const { sub } = verify(token, subject) as ITokenPayload;

        request.user = { id: sub };

        return next();
    } catch {
        throw new AppError('Invalid JWT token', 401);
    }
}
