// Carrega express framework da internet
const express = require('express');

// Carrega o modulo "calculadora"
const calculadora = require('./calculadora');

// Cria um app do tipo express
const app = express();

// Porta de execução
const PORT = 3000;

// Inicializar a aplicação na porta definida
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});

// '/' define rota raiz
app.get('/', (req, res) => {
    res.send("<h1>Hello, World!</h1> <p>Estou na teia(web)... VAI TOMANDO AÍ DENTRO!!!</p>");
});

// URL de soma
app.get('/calculadora/somar/:a/:b', (req, res) => {
    let a = Number(req.params.a);
    let b = Number(req.params.b);
    let resultado = calculadora.somar(a, b);
    let string_resultado = `<h1>${a} + ${b} = ${resultado}</h1>`
    LOG.push(string_resultado);
    res.send(string_resultado);
});

//Crie um array para armazenar resposta ao usuário
const LOG = [];

// URL de LOG
app.get('/calculadora/log', (req, res) => {
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});

// URL com paramentro
app.get('/ola/:nome', (req, res) => {
    res.send(`<h1>BEM VINDO, ${req.params.nome} HAHAHAHAHA</h1>`);
});

const estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let resultado_estoque = `<h2>Id: ${id}</h2>\n<h2>Nome: ${nome}</h2>\n<h2>Quantidade: ${qtd}</h2>`;
    estoque.push(resultado_estoque);
    res.send("Cadastrado com sucesso!");
});

app.get('/listar', (req, res) => {
    resultado = ""
    estoque.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});

app.get('/remover/:id', (req, res) => {
    
});