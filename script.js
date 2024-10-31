let segundos = 60;
let pontos = 0;
let intervalo;
const jogo = document.getElementById('jogo');
 
function segundo() {
    segundos--;
    document.getElementById('segundo').innerHTML = segundos;
    if (segundos === 0) {
        clearInterval(intervalo);
        alert('Tempo esgotado! Pontuação final: ' + pontos);
        location.reload();
    }
}
 
function posicaoAleatoria() {
    return Math.random() * (window.innerWidth - 100);
}
 
function criarImagem(tipo, estilo) {
    const img = document.createElement('img');
    if (tipo === 'abobora') {
img.src = estilo === 'abobora2' ? 'https://cdn-icons-png.flaticon.com/128/6433/6433176.png' : 'https://cdn-icons-png.flaticon.com/128/685/685844.png';
    } else if (tipo === 'aranha') {
img.src = estilo === 'morte' ? 'https://cdn-icons-png.flaticon.com/128/1141/1141463.png' : 'https://cdn-icons-png.flaticon.com/128/5482/5482892.png';
    }
 
    img.classList.add('imagem');
img.style.left = `${posicaoAleatoria()}px`;
img.style.width = '80px';
img.style.height = '80px';
img.style.position = 'absolute';
 
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        if (tipo === 'abobora' && estilo === 'abobora2') {
            pontos += 2;
        } else if (tipo === 'abobora') {
            pontos++;
        } else if (tipo === 'aranha' && estilo === 'morte') {
            pontos = 0;
        } else if (tipo === 'aranha') {
            pontos -= 2;
        }
        document.getElementById('pontos').innerHTML = pontos;
        img.remove();
    });
 
    jogo.appendChild(img);
 
    setTimeout(() => {
        if (jogo.contains(img)) img.remove();
    }, 6000);
}
 
function iniciarJogo() {
    document.getElementById('comecar').style.display = 'none';
    intervalo = setInterval(segundo, 1000);
    setInterval(() => {
        const tipo = Math.random() < 0.6 ? 'abobora' : 'aranha';
        const estilo = Math.random() < 0.6 ? 'abobora2' : 'morte';
        criarImagem(tipo, estilo);
    }, 3000);
}
 
document.getElementById('comecar').addEventListener('click', iniciarJogo);