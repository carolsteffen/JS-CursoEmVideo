function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document. getElementById('txtano');
    var res = document.querySelector('div#res');

    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert(`[Erro] Verifique os dados e tente novamente!`);
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);

        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'image');

        if (fsex[0].checked){
            genero = 'homem';
            if(idade>=0 && idade<=10){
                img.setAttribute('src', 'image/criancaM.jpg');

            } else if (idade<=21){
                img.setAttribute('src', 'image/adolescenteM.jpg');
            } else if (idade<=50){
                img.setAttribute('src', 'image/HOMEM.jpg');
            } else{
                img.setAttribute('src', 'image/IDOSO.jpg');
            }
        } else if(fsex[1].checked){
            genero = 'mulher';

            if(idade>=0 && idade<=10){
                img.setAttribute('src', 'image/criancaF.jpg');
            } else if (idade<21){
                img.setAttribute('src', 'image/adolescenteF.jpg');
            } else if (idade<50){
                img.setAttribute('src', 'image/MULHER.jpg');
            } else{
                img.setAttribute('src', 'image/IDOSA.jpg');
            }
            
        }
        res.getElementsByClassName.textAlign = 'center';
        res.innerHTML = `O usuário é ${genero} com ${idade} anos.`;

        //Para mostrar as imagens
        res.appendChild(img);
    }
}