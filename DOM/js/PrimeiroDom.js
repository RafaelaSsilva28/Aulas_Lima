const corpo = document.body;
const container = document.querySelector('.container');
const titulo = document.getElementById('titulo');
const paragrafo = document.querySelector('[data-info="intro"]')

corpo.style.backgroundColor = "#eb9fd5ff";
container.style.border = '2px solid black';
titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '48px';
titulo.style.color = 'white';
titulo.style.padding = '50px'
titulo.textContent += 'Dom';
paragrafo.textContent += 'DOM';
paragrafo.style.color = '#861041ff'
paragrafo.style.padding = '23px'
titulo.style.margin = '-30px'
