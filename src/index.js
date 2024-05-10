import express from 'express';
import { executeQuery } from './db.js';
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

executeQuery('SELECT * FROM historias_interactivas.stories;')

