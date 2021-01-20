function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();

console.log(hora);

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12) {
        img.src = './img/manha.jpg';
        document.body.style.background = '#e06c52';
    } else if (hora>=12 && hora < 19){
        img.src = './img/tarde.jpg';
        document.body.style.background = '#3d7679';
    } else {
        img.src = './img/noite.jpg';
        document.body.style.background = '#477499';
    }
}