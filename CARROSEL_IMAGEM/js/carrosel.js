const imagens = [
    {url:'https://i.pinimg.com/736x/cc/7b/21/cc7b2177e803bcf77d31a31fc780c4e5.jpg', alt:'Primeira Imagem'},
    {url:'https://i.pinimg.com/736x/ef/34/8d/ef348d83f6aa292daeaa7a3a1ada2921.jpg', alt:'Segunda Imagem'},
    {url:'https://i.pinimg.com/736x/6b/41/a6/6b41a6426f38aef97874c656c4193a67.jpg', alt:'Terceira Imagem'},
    {url:'https://i.pinimg.com/736x/fb/f9/b6/fbf9b6cd05a2f29c2dacb9ebf5164b6f.jpg', alt:'Quarta Imagem'}
]

const imagem = document.getElementById('slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pontos = document.querySelector('.pontos');

let indiceAtual = 0;

function mostrarImagem(indice){
    const item = imagens[indice];
    imagem.src = item.url;
    imagem.alt = item.alt;
}

function proxima(){
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
}

function anterior(){
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
}

prevBtn.addEventListener('click', anterior);
nextBtn.addEventListener('click', proxima);

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') anterior()
    if(e.key === 'ArrowRight') proxima()
})

mostrarImagem(indiceAtual)
setInterval(proxima, 2000)

