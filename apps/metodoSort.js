const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco'); 
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco);
let validacaoBtnClicado = true;

function ordenarPorPreco() {
    btnOrdenarPorPreco.innerHTML = '';

    if(validacaoBtnClicado) {
        ordenarPrecoDoMenorAoMaior();
    } else {
        ordenarPrecoDoMaiorAoMenor();
    };
};

function ordenarPrecoDoMaiorAoMenor() {
    const livrosOrdenadosPorPreco = livros.sort((a, b) => b.preco - a.preco);
    btnOrdenarPorPreco.innerHTML += `ORDENAR POR PREÇO &#x2191;`;
    exibirListaDeLivrosNaTela(livrosOrdenadosPorPreco);
    validacaoBtnClicado = true;
};

function ordenarPrecoDoMenorAoMaior() {
    const livrosOrdenadosPorPreco = livros.sort((a, b) => a.preco - b.preco);
    btnOrdenarPorPreco.innerHTML += `ORDENAR POR PREÇO &#x2B07;`;
    exibirListaDeLivrosNaTela(livrosOrdenadosPorPreco);
    validacaoBtnClicado = false;
};
