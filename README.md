# API Ganhadores Backend

## Módulo 2: API Back-end com Node.js + MongoDB

### Descrição

Este repositório contém a implementação de uma API desenvolvida em Node.js com o framework Express. A API é responsável por gerenciar os dados dos ganhadores, permitindo operações básicas como cadastro, listagem e remoção de ganhadores.

### Instruções Gerais

- **Framework**: Utiliza Node.js com Express para construir a API.
- **Banco de Dados**: Utiliza MongoDB para armazenar os dados dos ganhadores.
- **Endpoints REST**: A API fornece endpoints para cadastrar, listar e remover ganhadores.
- **Validação de Dados**: Inclui validações básicas nos campos dos ganhadores (nome, prêmio, data) para garantir que os dados inseridos estejam corretos.
- **Deploy**: A API deve ser hospedada online em um servidor, como Heroku ou AWS, com o banco de dados no **MongoDB Atlas**.

### Funcionalidades da API

1. **Cadastrar Ganhador**:
    - **Endpoint**: `POST /ganhadores`
    - **Descrição**: Permite adicionar um ganhador à lista, recebendo os campos `name`, `prize` e `date`.

2. **Listar Ganhadores**:
    - **Endpoint**: `GET /ganhadores`
    - **Descrição**: Lista todos os ganhadores cadastrados, que será consumido pela Seção 5 do front-end.

3. **Remover Ganhador**:
    - **Endpoint**: `DELETE /ganhadores/:id`
    - **Descrição**: Permite remover um ganhador específico utilizando seu ID.

### Problemas de Conexão com MongoDB

Atualmente, não conseguimos conectar ao MongoDB devido a limitações de espaço no ambiente local. Uma vez resolvido, o banco de dados será hospedado no **MongoDB Atlas**, garantindo acesso online e escalabilidade.

### Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Asoares10/api-ganhadores-backend.git

2  Navegue até o diretório do projeto:
   cd api-ganhadores-backend

3 Instale as dependências:
  npm install
  
4 Inicie o servidor:
  npm start

Contribuições
Contribuições são bem-vindas!

  



