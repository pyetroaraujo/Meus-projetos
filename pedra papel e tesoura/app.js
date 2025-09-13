let tesouraJogo = ('tesoura');
let papelJogo = ('papel');
let pedraJogo = ('pedra');
let Jogador1 = prompt('Escolha entre pedra, papel ou tesoura');
let Jogador2 = prompt('Escolha entre pedra, papel ou tesoura');

if (Jogador1 === Jogador2) {
    alert('Empate');
}
else if (Jogador1 === pedraJogo && Jogador2 === papelJogo) {
    alert('Jogador 2 Venceu');
}
else if (Jogador1 === pedraJogo && Jogador2 === tesouraJogo) {
    alert('Jogador 1 Venceu');
}
else if (Jogador1 === papelJogo && Jogador2 === pedraJogo) {
    alert('Jogador 1 Venceu');
}   
else if (Jogador1 === papelJogo && Jogador2 === tesouraJogo) {
    alert('Jogador 2 Venceu');
}
else if (Jogador1 === tesouraJogo && Jogador2 === pedraJogo) {
    alert('Jogador 2 Venceu');
}
else if (Jogador1 === tesouraJogo && Jogador2 === papelJogo) {
    alert('Jogador 1 Venceu');
}
else {
    alert('Jogada Inválida');
}
