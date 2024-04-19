let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);
    exibirListaDeLivrosNaTela(livrosComDesconto);
};

