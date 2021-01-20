function soma (num1 = 0, num2 = 0){
    return num1 + num2;
}

console.log(soma (2, 5));

//Passando uma função dentro de uma variável
// var example = function (x){
//     return x * 2;
// }
// console.log(example(5));

function fatorial(num){
    let fator = 1;
    for (let cont=num; cont >1; cont--){

        fator*= cont;
    }
    return fator;
}

console.log(fatorial (5));

//OU de forma recursiva

function fatorial(num){
    let fator = 1;
    if(num == 1){
        return 1;
    } else{

    return num * fatorial(num-1);
    }
}
