let amigos = [];

function adicionar () {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if (amigo.value === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Amigo já adicionado.');
        amigo.value = '';
        return;
    }
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear () {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para sortear.');
        return;
    }
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = ''; // limpa antes de mostrar novo sorteio

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            // último amigo sorteia o primeiro
            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
    function reiniciar() {
        amigos = [];
        document.getElementById('lista-amigos').innerHTML = '';
        document.getElementById('lista-sorteio').innerHTML = '';
    }


