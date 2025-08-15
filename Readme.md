# Projeto Toughts

Bem-vindo ao projeto **Toughts**, uma aplicação web de blog de pensamentos onde os usuários podem compartilhar e gerenciar suas ideias. Este projeto foi desenvolvido com Node.js, Express e Handlebars, seguindo o padrão MVC para uma arquitetura organizada.

---

## 📖 Sobre o Projeto

O **Toughts** é uma plataforma simples e direta para que usuários autenticados possam criar, editar, visualizar e excluir pensamentos. A aplicação inclui um sistema de autenticação robusto com criptografia de senha, validação de dados e gerenciamento de sessão, garantindo uma experiência segura e funcional.

### Funcionalidades Principais

* **Autenticação de Usuário:** Registro e login de usuários com senhas criptografadas usando **bcrypt**.
* **Gerenciamento de Pensamentos:** Os usuários podem criar, editar e excluir seus próprios pensamentos a partir de um painel de controle (dashboard).
* **Visualização Pública:** Qualquer visitante pode visualizar os pensamentos postados, com opções de busca e ordenação.
* **Controle de Sessão:** Utiliza `express-session` para manter o estado do usuário logado.
* **Tratamento de Mensagens:** Exibe mensagens de feedback (sucesso/erro) para o usuário usando `connect-flash`.

---

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework web para criação da API e roteamento.
* **Handlebars.js:** Motor de template para renderização de páginas HTML no servidor.
* **MySQL:** Banco de dados relacional para armazenar os dados.
* **Sequelize:** ORM (Object-Relational Mapping) para interagir com o banco de dados de forma mais simples.
* **bcrypt.js:** Biblioteca para criptografar senhas.
* **express-session & connect-flash:** Para gerenciamento de sessão e mensagens.
* **Nodemon:** Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## ⚙️ Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Pré-requisitos:** Certifique-se de ter o **Node.js** e o **MySQL** instalados em sua máquina.
2.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [NOME_DO_SEU_PROJETO]
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configurar o Banco de Dados:**
    * Crie um banco de dados MySQL chamado `tought`.
    * Atualize as credenciais no arquivo de configuração do banco de dados `db/conn.js`:
        ```javascript
        const sequelize = new Sequelize('tought', 'root', 'SUA_SENHA_DO_MYSQL', {
            host: 'localhost',
            dialect: 'mysql'
        });
        ```
5.  **Inicialize o servidor:**
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

---

## 💻 Rotas da Aplicação

### Rotas Públicas (acessíveis a todos)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Página inicial que exibe todos os pensamentos. Inclui funcionalidade de busca e ordenação. |
| `GET` | `/login` | Página de login. |
| `POST` | `/login` | Processa o login do usuário. |
| `GET` | `/register` | Página de registro de novo usuário. |
| `POST` | `/register` | Processa o registro de novo usuário. |

### Rotas Privadas (requerem autenticação)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/toughts/dashboard` | Painel do usuário, exibe somente os seus pensamentos. |
| `GET` | `/toughts/add` | Formulário para criar um novo pensamento. |
| `POST` | `/toughts/add` | Salva o novo pensamento no banco de dados. |
| `POST` | `/toughts/remove` | Remove um pensamento pelo ID. |
| `GET` | `/toughts/edit/:id` | Formulário para editar um pensamento específico. |
| `POST` | `/toughts/edit` | Atualiza o pensamento no banco de dados. |
| `GET` | `/logout` | Encerra a sessão do usuário. |