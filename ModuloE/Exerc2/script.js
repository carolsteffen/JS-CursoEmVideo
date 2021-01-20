function gerar(){
    var numero = document.getElementById('numero');
    var res = document.getElementById('res');

    if(numero.value.length == 0){
        window.alert("[ERRO] Faltam dados!");
        
    } else {
        var multtable = Number(numero.value);
        var resultado;
        var cont;

        res.innerHTML = '';

        for(cont=0; cont<=10; cont++){
            //var option = document.createElement('option');

            resultado = multtable * cont;
            //option.value = `${resultado}`;
            //res.appendChild(option);
            res.innerHTML += `<option>${resultado}<option>`;
        }
    }
}