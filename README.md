# 🎬 Prime Flix React

Uma aplicação web simples desenvolvida em React que permite aos usuários explorar filmes em cartaz, visualizar detalhes dos filmes e gerenciar uma lista de favoritos. O projeto consome a API do The Movie Database (TMDB) para obter informações sobre filmes.


## ✨ Funcionalidades

- **Página Inicial**: Exibe os filmes em cartaz com poster, título e link para detalhes
- **Detalhes do Filme**: Página dedicada com informações do filme selecionado
- **Sistema de Favoritos**: Permite salvar filmes em uma lista pessoal
- **Gerenciamento de Favoritos**: Visualizar e remover filmes da lista de favoritos
- **Navegação Intuitiva**: Interface limpa com header de navegação
- **Notificações**: Sistema de toast para feedback do usuário
- **Responsividade**: Interface adaptável para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.8.0** - Roteamento para navegação entre páginas
- **Axios 1.11.0** - Cliente HTTP para requisições à API
- **React Toastify 11.0.5** - Sistema de notificações toast
- **CSS3** - Estilização das páginas e componentes
- **The Movie Database API** - Fonte de dados dos filmes

## 📁 Estrutura do Projeto

```
prime-flix-react/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   └── Header/        # Cabeçalho da aplicação
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home/          # Página inicial
│   │   ├── Filme/         # Detalhes do filme
│   │   ├── Favoritos/     # Lista de favoritos
│   │   └── Erro/          # Página de erro
│   ├── services/          # Serviços e configurações
│   │   └── api.js         # Configuração da API
│   ├── App.js             # Componente principal
│   ├── routes.js          # Configuração de rotas
│   └── index.js           # Ponto de entrada
└── package.json           # Dependências e scripts
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone git@github.com:steoliv/Prime-flix-react.git
cd prime-flix-react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

### Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm build` - Cria uma versão otimizada para produção
- `npm test` - Executa os testes automatizados


## 📱 Como Usar

1. **Página Inicial**: Visualize os filmes em cartaz na tela principal
2. **Ver Detalhes**: Clique em "Acessar" em qualquer filme para ver informações completas
3. **Salvar Filme**: Na página de detalhes, clique em "Salvar" para adicionar à lista de favoritos
4. **Gerenciar Favoritos**: Acesse "Meus filmes" no header para ver e remover filmes salvos
5. **Assistir Trailer**: Na página de detalhes, clique em "Assistir Trailer" para buscar no YouTube

## 🔧 Configuração da API

O projeto utiliza a API do The Movie Database (TMDB). Para usar sua própria chave de API:

1. Registre-se em [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Obtenha sua chave de API
3. Substitua a chave no arquivo `src/services/api.js` ou nas chamadas da API

## 📝 Funcionalidades Técnicas

- **Local Storage**: Os favoritos são salvos no navegador do usuário
- **Roteamento Dinâmico**: URLs com parâmetros para páginas de filmes específicos
- **Tratamento de Erros**: Página de erro 404 para rotas inexistentes
- **Loading States**: Indicadores de carregamento durante requisições
- **Responsive Design**: Interface adaptável para mobile e desktop


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React, consumindo a API do The Movie Database.

---

**Nota**: Este projeto é apenas para fins educacionais e de demonstração.
