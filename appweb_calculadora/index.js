const express = require('express');

const app = express()

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("<h1>Hello, World!</h1> <p>Estou na teia... VAI TOMANDO AÍ DENTRO!!!</p>");
});

app.get('/bem-vindo', (req, res) => {
    res.send("<h1>BEM VINDO, CACHORRÃO HAHAHAHAHA</h1>");
})

app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});

