//Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.
//Uma função pode receber parâmetros e retornar um resultado.

function parImpar(num){
    if (num % 2 == 0){
        return 'Par!';
    } else {
        return 'Impar!'
    }
}

var res = parImpar(4);
console.log(res);
//Ou só console.log(parImpar(4));