# Projeto de Bloco

## Descrição

Este projeto consiste na criação de um site que utiliza a API do TMDB (The Movie Database) para exibir informações sobre filmes. Através desta aplicação, é possível pesquisar, visualizar detalhes e navegar por uma lista de filmes.

## Configuração do Ambiente

Para que o projeto funcione corretamente, é necessário configurar algumas variáveis de ambiente. Crie um arquivo chamado `.env` na raiz do seu projeto e adicione as seguintes linhas:

```properties
REACT_APP_PRIVATE_API_KEY=SUA_CHAVE_API
REACT_APP_API=https://api.themoviedb.org/3/movie/
REACT_APP_SEARCH=https://api.themoviedb.org/3/search/movie/
REACT_APP_IMG=https://image.tmdb.org/t/p/w500/
