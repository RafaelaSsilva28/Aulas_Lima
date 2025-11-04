const corpo = document.body;
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2')
const troc = document.querySelector('.troc')
const paragrafo = document.querySelector('[data-info="intro"]')
const titulo = document.getElementById('titulo');
const button = document.querySelector('.button')


corpo.style.backgroundColor = "#eca4d7ff";
container1.style.backgroundColor = '#fff'
container1.style.padding = '20px';
troc.style.color = '#a8228bff'

container2.style.backgroundColor = "#dad5d5ff"
container2.style.padding = '20px'
container2.style.color = '#ac0973ff'

paragrafo.style.color = '#7f0955ff'
titulo.textContent += 'Rafaela de Souza Silva';
titulo.style.color = '#830c65ff'

button.style.color = '#950740ff'
button.style.backgroundColor = '#e065cdff'
