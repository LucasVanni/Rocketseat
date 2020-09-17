/* eslint-disable no-console */
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';

import 'express-async-errors';

import uploadConfig from '@config/upload';

import AppError from '@shared/errors/AppError';

import routes from './routes';

import '@shared/container';

// Importando a conexão do banco
import '@shared/infra/typeorm';

const app = express();

// Libera a aplicação para acessar a url do cors
app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
);

app.use(express.json());

app.get('/', (_req, res) => {
    return res.json({ message: 'Welcome to goBarber api' });
});

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

// Será o middleware da tratativa de erros
app.use(
    (
        err: Error,
        _request: Request,
        response: Response,
        _next: NextFunction,
    ) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }

        console.log(err);

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(3333, () => {
    console.log('🚀 Server running');
});
