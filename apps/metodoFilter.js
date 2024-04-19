const listaDeBotoes = document.querySelectorAll('.btn');
listaDeBotoes.forEach(botao => botao.addEventListener('click', filtrarCategoria)); // Realiza um laço de retpetição para cada btn clicado 

function filtrarCategoria() {
    const elementoBtn = document.getElementById(this.id); // // Retorna o ID do elemento
    const categoria = elementoBtn.value;

    const filtrarCadaCategoria = categoria == 'disponivel' ? validarLivroDisponivel() : validarCategoriaLivro(categoria);
    exibirListaDeLivrosNaTela(filtrarCadaCategoria);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(filtrarCadaCategoria);
        exibirBannerValorTotal(valorTotal);
    };
};

function exibirBannerValorTotal(valorTotal) {
    bannerTotalDeLivrosDisponiveis.innerHTML += `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
            </div>
        `;
}

function validarLivroDisponivel() {
    return livros.filter(livro => { return livro.quantidade > 0; });
};

function validarCategoriaLivro(categoria) {
    return livros.filter(livro => { return livro.categoria == categoria; });
};


