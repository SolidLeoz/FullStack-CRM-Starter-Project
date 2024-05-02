const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient(); // Inizializza Prisma Client

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello  my  World!');
})

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany(); // Utilizza Prisma Client per leggere i dati
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Errore nel recuperare gli utenti' });
    }
});

app.post('/user', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
            }
        });
        console.log('User created:', user);
        res.json(user).status(201);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Errore nel salvataggio del nuovo utente' });
    }
});


// Altre rotte qui...

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
