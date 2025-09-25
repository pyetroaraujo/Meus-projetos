let totalGeral; 
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preço = quantidade * valorUnitario;
    let listaProduto = document.getElementById('lista-produtos');
    //adicionar no carrinho
    listaProduto.innerHTML = listaProduto.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preço}</span>
        </section>`;
//atualizar o total
totalGeral = totalGeral + preço;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;
}

function limpar(){
    //limpar o carrinho
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}