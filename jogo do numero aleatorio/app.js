let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// Função para gerar número secreto sem repetir
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

    // Verifica se todos os números já foram sorteados
    if (quantidadeNumerosSorteados === 10) {
        listaDeNumerosSorteados = [];
    }
    // Verifica se já foi sorteado
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log("Números já sorteados:", listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

// Função genérica para exibir texto em um elemento
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
 


}

// Mensagem inicial do jogo
function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Digite um número entre 1 e 10');
}

// Verificação do chute
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTexto('h1', '🎉 Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('p', `Você acertou em ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let dica = chute > numeroSecreto ? 'menor' : 'maior';
        exibirTexto('p', `O número secreto é ${dica}.`);
        tentativas++;
        limparCampo();
    }
}

// Limpar campo de input
function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

// Reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Inicializa o jogo
exibirMensagemInicial();
