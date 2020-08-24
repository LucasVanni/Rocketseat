import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  const User = {
    name,
    email,
  };

  return res.json(User);
});

app.listen(3333);
