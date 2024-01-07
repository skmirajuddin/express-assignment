const express = require('express');
const app = express();
const PORT = 3001;

let counter = 0;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ counter: counter });
});

app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter: counter });
});

app.post('/decrement', (req, res) => {
    counter--;
    res.json({ counter: counter });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
