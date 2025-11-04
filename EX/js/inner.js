const corpo = document.body;
const container = document.querySelector('.container');
const titulo = document.getElementById('titulo');
const paragrafo = document.querySelector('[data-info="intro"]')

corpo.style.backgroundColor = "#122507ff";
container.style.border = '2px solid white';
container.style.boxShadow = "0 0 15px 3px rgba(255, 255, 255, 0.7)";

titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '48px';
titulo.style.color = '#018466ff';
titulo.style.padding = '50px'
// titulo.textContent += 'Dom';
// paragrafo.textContent += 'DOM';
paragrafo.style.color = '#fffefeff'
paragrafo
