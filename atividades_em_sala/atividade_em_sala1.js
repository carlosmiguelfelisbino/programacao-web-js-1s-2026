// Atividade do dia 09/03

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;    
    }
}

function apresentarMensagemPariedade(x){
    let y = verificarParidade(x)
    if(y === true){
        console.log(`${x} eh par`);
    }
    else{
        console.log(`${x} eh impar`);
    }
}

apresentarMensagemPariedade(1);
apresentarMensagemPariedade(11);
apresentarMensagemPariedade(2);
apresentarMensagemPariedade(355489);
apresentarMensagemPariedade(11111110);