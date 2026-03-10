function verificarNumeroPrimo(n){
    let i = 2;
    if(n <= 1){
        return false;
    }
    for(i = 2; i < n % 2; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(verificarNumeroPrimo(0));
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false