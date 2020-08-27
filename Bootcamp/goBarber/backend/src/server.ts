/* eslint-disable no-console */
import express from 'express';

import routes from './routes';

// Importando a conexão do banco
import './database';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    return res.json({ message: 'Welcome to goBarber api' });
});

app.use(routes);

app.listen(3333, () => {
    console.log('🚀 Server running');
});
