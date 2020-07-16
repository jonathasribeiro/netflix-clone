# React Netflix Clone App

Esse Projeto foi feito com base na interface do Netflix apenas como base para estudo. 

# Teste você mesmo

Siga esses passos

* `git clone https://github.com/marquesm91/react-netflix`
* `npm install` ou `yarn`
* `npm run start` ou `yarn start`

Esta Aplicação irá abrir no seu Navegador padrão pelo link https://localhost:3000/

# Sobre a Aplicação

Depois da criação do Projeto com `create-react-app`, adicionei 2 Libs para React:

* `react-router-dom` encontrada [aqui](https://github.com/ReactTraining/react-router).
* `react-items-carousel` encontrada [aqui](https://github.com/bitriddler/react-items-carousel).

O primeiro foi usado para que o usuário tenha uma melhor experiência com a navegação de URL e mantenha o aplicativo de reação sincronizado. O outro era facilitar o uso de carrossel horizontal como o Netflix.

# Features

* A Aplicação consome a [MovieDB API](https://www.themoviedb.org/documentation/api) em tempo real.
* A entrada de pesquisa na navbar tem um bom estilo de tradução, como o netflix, e pode pesquisar nomes de filmes e filmes relacionados a uma pessoa famosa. por exemplo. procurar Dory e procurar Chris Evans.
* Quando você procurar algo e pressionar Enter, você será redirecionado para a página de Pesquisa apenas se seus resultados tiverem pelo menos um filme.
* Para cada cartão de filme, você pode adicionar à sua lista de favoritos e ela estava acessível na Minha Lista na barra de navegação. Se o filme já existir na sua lista de favoritos, um ícone de verificação ficará visível até você optar por removê-lo.

