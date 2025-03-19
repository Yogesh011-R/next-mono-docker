import express from 'express';
import { client } from '@repo/db';

const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await client.user.findMany();

    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/user', (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

  client.user
    .create({
      data: {
        name,
        password,
        email: `${name}@example.com`,
      },
    })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
