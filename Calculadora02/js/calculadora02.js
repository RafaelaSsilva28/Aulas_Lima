const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const resultado = document.getElementById('result');

function somar (){
    resultado.textContent = Number(numero1.value) + Number(numero2.value)
}
function subtrair (){
    resultado.textContent = Number(numero1.value) - Number(numero2.value)
}
function multiplicar (){
    resultado.textContent = Number(numero1.value) * Number(numero2.value)
}
function dividir (){
    resultado.textContent = Number(numero1.value) / Number(numero2.value)
}

function reset (){
    numero1.Value = "";
    numero2.Value = "";
    resultado.innerHTML = "";
}

function maior(){
    if (Number(numero1.value) > Number (numero2.value)){
        resultado.textContent = 'O primeiro numero é maior que o segundo'
    }else if (Number(numero1.value) < Number(numero2.value)){
        resultado.textContent = 'O primeiro numero é menor que o segundo'
    }else if (Number(numero1.value) == Number(numero2.value)){
        resultado.textContent = 'Os numeros são iguais'
    }else{
        resultado.textContent = 'COLOQUE DOIS NUMEROS NA CALCULADORA'
    }
}

function pares() {
   if (Number(numero1.value % 2 == 0 && numero2.value % 2 == 0)){
    resultado.textContent = 'O primeiro e o segundo numero são pares'
   }else if (Number(numero1.value % 2 ))
}

