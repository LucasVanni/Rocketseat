import express from 'express';

import { helloWorld } from './routes';

const app = express();

app.get('/', helloWorld);

app.listen(3334, () => {
  console.log('🚀 backend started');
});