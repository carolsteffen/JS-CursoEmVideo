var horaAtual = new Date();
var hora = horaAtual.getHours();

console.log(`Agora são ${hora} hrs.`);

if(hora < 12) {
    if(hora <= 6){
        console.log("Madrugada");
    }
    else{
        console.log("Bom dia!");
    }
} else if (hora < 19){
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}