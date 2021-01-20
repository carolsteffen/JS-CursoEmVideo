//let num = [5, 8, 4, 6];
//num[4] = 7 é criado automaticamente um espaço novo no vetor
// se quero jogar o valor na uĺtima posição uso: num.push(5)
// num.length
// num.sort vai colocar em ordem crescente
// para buscar dentro do vetor um valor específico usa-se valores.indexOf(7). Ele vai procurar
// o valor 7 e vai retornar a posição se tiver. Se não houver, vai retornar -1.

var valores = [6, 2, 3, 4, 5, 1];
valores.sort();

// for (let cont=0; cont<valores; cont++) {
//     console.log(`A posição ${cont} tem o valor ${valores}.`);
// }

for(let cont in valores){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}.`);
}