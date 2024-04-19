const elementoParaInserirLivro = document.getElementById('livros');
const bannerTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirListaDeLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivro.innerHTML = '';
    bannerTotalDeLivrosDisponiveis.innerHTML = '';

    listaDeLivros.forEach(livro => {
        const disponibilidade = verificarDisponibilidadeDoLivro(livro);

        elementoParaInserirLivro.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    });
};

function verificarDisponibilidadeDoLivro(livro) {
    if (livro.quantidade > 0) {
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    };
};