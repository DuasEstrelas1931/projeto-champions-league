# Projeto Champions League

Este projeto é uma API para gerenciar as funcionalidades relacionadas à Champions League. Utilizamos Node.js com TypeScript para desenvolver as funcionalidades do servidor.

## Scripts

Aqui estão os principais scripts configurados no `package.json`:

- **`dist`**: Compila o código TypeScript e gera o build utilizando o `tsup`.
    ```bash
    npm run dist
    ```
- **`start:dev`**: Inicia o servidor em modo de desenvolvimento utilizando tsx e carrega variáveis de ambiente do arquivo .env.
    ```bash
    npm run start:dev
    ```
- **`start:watch`**: Inicia o servidor em modo de desenvolvimento com hot-reloading.
    ```bash
    npm run start:watch
    ```
- **`start:dist`**: Gera o build com npm run dist e executa o servidor a partir do código compilado.    
    ```bash
    npm run start:dist
    ```

# Dependências

## As seguintes dependências são usadas no projeto:

- @types/cors: ^2.8.17
- @types/express: ^4.17.21
- @types/node: ^22.5.5
- cors: ^2.8.5
- express: ^4.21.0
- tsup: ^8.3.0
- tsx: ^4.19.1
- typescript: ^5.6.2   

# Como rodar o projeto

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Inicie o servidor em modo de desenvolvimento:    
     ```bash
    npm run start:dev
    ```

 3. Para gerar o build e executar o servidor a partir do código compilado, execute
     ```bash
    npm run start:dist
    ```

# Configuração

Certifique-se de ter o arquivo .env configurado corretamente para carregar as variáveis de ambiente necessárias para o projeto.

# Contribuições

Sinta-se à vontade para contribuir com melhorias ao projeto, abrindo pull requests ou relatando problemas na seção de issues.