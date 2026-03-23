function imprimirTexto(texto){
    console.log(texto);
}

function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

imprimirTexto("Olá, Web");
imprimirTexto("Vai teia...");

console.log(`3 + 5 = ${somar(3, 5)}`);

function executarOperacao(operacao, a, b){
    return operacao(a, b);
}

console.log(`Operaçao (10 + 10): ${executarOperacao(somar, 10, 10)}`);
console.log(`Operacao (20 - 10): ${executarOperacao(subtrair, 20, 10)}`);