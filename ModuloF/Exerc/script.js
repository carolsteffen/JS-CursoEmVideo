let numbero = document.getElementById('numbero');
let list = document.getElementById('listing');
let res = document.getElementById('res');
let values = [];

function isANumber(n){
    if(Number(n)>=0 && Number(n)<=100){
        return true;
    } else {
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function inserir(){
    if(isANumber(numbero.value) && !inList(numbero.value, values) && numbero.value) {
        values.push(Number(numbero.value));

        let item = document.createElement('option');
        item.text = `O valor adicionado foi ${numbero.value}.`;
        list.appendChild(item);

        res.innerHTML = '';

    } else {
        window.alert('Erro! Valor inválido ou já encontrado na lista');
    }

    numbero.value = "";
    numbero.focus();
    
}

function finalizar(){
    if(values.length == 0){
        window.alert('Erro! Adicione valores antes de finalizar!');

    } else {
        console.log(values.length);
        var total = values.length;

        let major = values[0];
        let minor = values[0];

        var sum = 0;
        var med = 0;

        for(let cont in values) {
   
            if(values[cont] > major){
                major = values[cont]
            }if(values[cont] < minor){
                minor = values[cont];
            }

            sum += values[cont];
            med = sum / total;
        }

        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p> O menor valor inserido ${minor}.</p>`;
        res.innerHTML += `<p> O maior valor inserido ${major}.</p>`;
        res.innerHTML += `<p> A soma dos valores inseridos ${sum}.</p>`;
        res.innerHTML += `<p> A média de valores inseridos ${med}.</p>`;
        
    }
}
// Objeto
/* let amigo = {nome:'José', sexo:'M', peso:85.5, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} 
    amigo.engordar(2);
    console.log(`${amigo.nome} pesa ${amigo.peso}.</p>`*/
