const corpo = document.body
corpo.style.backgroundColor = '#e4b1dfff'

const h1 = document.getElementById('h1');
h1.style.color = '#b00c79ff'

const container = document.querySelector('.container')
const  paragrafo = '<p> Eu aprendi a acrescentar elementos com Java Script, venha experimentar meu bolo agora </p>'
container.innerHTML += paragrafo


const text = document.getElementById('text');
text.style.color = '#a40a5aff'
text.textContent = ' Eu mudei o texto que estava para mostrar a utilização de textContent'

container.style.backgroundColor = '#ea8acfff'


const container3 = document.querySelector('.container3');
container3.innerHTML += `
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBo3tARRcuaScLCMyEzFbQGCzp8YVnZ8vBQQ&s "  width="300">
`;


const button = document.getElementById('button')
button.style.backgroundColor = '#e065cdff'
