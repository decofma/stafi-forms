# Stafi Forms Excercise

## Visão Geral

Este projeto é uma aplicação Next.js que utiliza Context API para gerenciar o estado do usuário e das tarefas. A aplicação inclui um formulário para capturar informações do usuário e outro para detalhes de tarefas, com a funcionalidade de salvar os dados utilizando uma API externa.

## Estrutura do Projeto

- **`app.tsx`**: Configura o contexto global do aplicativo, envolvendo todos os componentes com `UserProvider` e `TaskProvider`.
- **`MainForm.tsx`**: Componente principal da aplicação que consome os contextos de usuário e tarefas e renderiza os formulários.
- **`UserForm.tsx`**: Formulário para captura e exibição das informações do usuário.
- **`TaskForm.tsx`**: (Não fornecido no código, mas deve ser um formulário para capturar detalhes das tarefas.)
- **`UserContext.tsx`**: Contexto do usuário, incluindo o provedor e hooks personalizados para acessar o contexto.
- **`api.ts`**: Funções auxiliares para interagir com APIs externas.

## Instalação

Para configurar e rodar o projeto localmente, siga estas etapas:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. Acesse a aplicação no navegador:
    ```
    http://localhost:3000
    ```

## Uso

A aplicação é estruturada para capturar informações do usuário e tarefas. 

- **Formulário de Usuário**: O formulário exibe e permite a edição das informações do usuário, como nome, email e endereço. Ele também busca um usuário aleatório e preenche o formulário com esses dados.

- **Formulário de Tarefa**: (Este formulário não está incluído no código fornecido, mas deve ser implementado seguindo a mesma abordagem utilizada para o formulário de usuário.)

- **Envio de Dados**: Ao clicar no botão "Submit" no `MainForm`, os dados do usuário e das tarefas são enviados para uma API externa. A função `saveUserData` é responsável por enviar os dados e tratar a resposta.

## Contextos

### `UserContext`

- **`UserContext`**: Fornece o estado do usuário e a função para atualizá-lo.
- **`UserProvider`**: Provedor que encapsula a aplicação e fornece o contexto do usuário.
- **`useUserContext`**: Hook personalizado para acessar o contexto do usuário.

### `TaskContext`

- **`TaskContext`**: (Contexto para as tarefas, similar ao `UserContext`, mas não incluído no código fornecido.)
- **`TaskProvider`**: (Provedor que encapsula a aplicação e fornece o contexto das tarefas.)
- **`useTaskContext`**: (Hook personalizado para acessar o contexto das tarefas.)

## Contribuições

Contribuições são bem-vindas! Para contribuir com o projeto, por favor, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça commit das suas alterações:
    ```bash
    git commit -am 'Adiciona nova feature'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-nova-feature
    ```
5. Abra um Pull Request no GitHub.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver perguntas ou precisar de ajuda, sinta-se à vontade para abrir uma issue no repositório ou entrar em contato.
