const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();
const cors = require('cors');
const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET ALL

app.get('/api/anime', async (req, res) => {
  const allAnime = await prisma.anime.findMany();
  console.log(allAnime);
  res.json(allAnime);
});

// GET ONE

app.get('/api/anime/:id', async (req, res) => {
  const { id } = req.params;

  const anime = await prisma.anime.findUnique({
    where: { id: Number(id) },
  });

  res.json(anime);
  console.log(anime);
});

// POST

app.post('/api/anime', async (req, res) => {
  const { anime_id, anime_name, anime_release } = req.body;

  const result = await prisma.anime.create({
    data: {
      anime_id,
      anime_name,
      anime_release,
    },
  });

  res.json({ msg: 'Anime added' });
});

// UPDATE

app.put('/api/anime/:id', async (req, res) => {
  const { id } = req.params;
  const { anime_id, anime_name, anime_release } = req.body;

  const post = await prisma.anime.update({
    where: { id: Number(id) },

    data: {
      anime_id,
      anime_name,
      anime_release,
    },
  });

  res.json({ msg: `Anime ${id} updated` });
});

// DELETE

app.delete('/api/anime/:id', async (req, res) => {
  const { id } = req.params;

  const post = await prisma.anime.delete({
    where: { id: Number(id) },
  });

  res.json({ msg: `Anime ${id} deleted` });
});

// GET: Inner join (using raw SQL query syntax)

app.get('/api/joinedtables', async (req, res) => {
  const users = await prisma.$queryRaw`
SELECT * FROM anime
INNER JOIN anime_details
ON anime.anime_id = anime_details.anime_id;
`;

  res.json(users);
  console.log(users);
});

const port = process.env.PORT || 8000;

if (process.env.ENVIRONMENT === 'development') {
  app.listen(port, () =>
    console.log(`Server running on port ${port}, http://localhost:${port}`)
  );
}
