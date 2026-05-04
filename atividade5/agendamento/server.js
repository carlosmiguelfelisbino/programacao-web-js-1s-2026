const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.post('/agendamento', (req, res) => {
    const dadosAgendamento = req.body;

    
    const camposObrigatotorios = ['nome', 'sobrenome', 'cpf', 'nascimento', 'telefone', 'cep', 'endereco', 'clinica', 'especialidade', 'data', 'hora'];
    for (let campo of camposObrigatotorios) {
        if (!dadosAgendamento[campo] || dadosAgendamento[campo].trim() === "") {
            return res.send(`<h2>Erro: O campo ${campo} deve ser preenchido!</h2><a href="/">Voltar</a>`);
        }
    }
 
    const dataConsulta = new Date(dadosAgendamento.data + 'T00:00:00');
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataConsulta <= hoje) {
        return res.send(`<h2>Erro: A data da consulta deve ser posterior a hoje!</h2><a href="/">Voltar</a>`);
    }

    res.render('agendamento.html', { dadosAgendamento });
});

app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});