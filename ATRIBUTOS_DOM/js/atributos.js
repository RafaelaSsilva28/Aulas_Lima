// Arquivo: atributos.js

const imagem = document.getElementById('bolo');

// 🚨 CORRIGIDO: Descomentado e adicionado o '.' para selecionar a CLASSE 'campoTexto'
const input = document.querySelector('.campoTexto'); 

imagem.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/03/26/13/25/sacher-cake-1280575_1280.jpg');
imagem.setAttribute('alt', 'imagem do bolo');

input.setAttribute('placeholder', 'Digite seu nome');

// Esta linha só será executada se não houver erro nas linhas anteriores
imagem.classList.add('esconder');