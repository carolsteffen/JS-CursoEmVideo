function contar(){
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!';
        window.alert("[ERRO] Faltam dados!");
        
    } else {
        res.innerHTML = 'Contando...<br>';
        var init = Number(inicio.value);
        var final = Number(fim.value);
        var step = Number(passo.value);
        var cont = 0;

        if(step <=0){
            window.alert("[ERRO] Faltam dados!");
            step = 1;
        }

        if(init<final){
            for(cont = init; cont<=final; cont+=step){
            res.innerHTML += `${cont} \u{1F919} `;
            }
        } else {
            for(cont = init; cont>=final; cont-=step){
                res.innerHTML += `${cont} \u{1F919} `;
            }
        }

        res.innerHTML += `${cont} \u{1F3C1} `;
}

}
