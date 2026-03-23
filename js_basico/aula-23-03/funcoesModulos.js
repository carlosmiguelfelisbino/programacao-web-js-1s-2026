const operacoes = require('./operacoes');

function imprimirTexto(texto){
    console.log(texto);
}


imprimirTexto("Olá, Web");
imprimirTexto("Vai teia...");

console.log(`3 + 5 = ${operacoes.somar(3, 5)}`);

function executarOperacao(operacao, a, b){
    return operacao(a, b);
}

console.log(`Operaçao (10 + 10): ${executarOperacao(operacoes.somar, 10, 10)}`);
console.log(`Operacao (20 - 10): ${executarOperacao(operacoes.subtrair, 20, 10)}`);