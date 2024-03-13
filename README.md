# Testes de API com Cypress

Este repositório contém (em fase de desenvolvimento, ainda) testes de api utilizando o framework Cypress. Os testes foram desenvolvidos para validar o comportamento de uma API REST pelos metodos mais utilizados (GET, POST, UPDATE e DELETE).

<!-- Ao decorrer do desenvolvimento dos testes, houve uma implementação utilizando um padrão de projeto chamado Page Object que tem como objetivo fazer a separação elementos e/ou ações configurado nas páginas ou nas telas dos cenário de automação de testes, ou seja, realização de uma separação entre os testes e as interações com as telas da aplicação.

Neste projeto também fora aplicado bibliotecas externas, como o Fake-js, para o desenvolvimento automático da nossa massa de dados. -->

## 🔖 Requisitos funcionais (em desenvolvimento)

<!-- ### Register user

- [X] register successfully
- [X] field blank name
- [X] field blank e-mail
- [X] field invalid e-mail
- [X] field blank password
- [X] field invalid password

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| nome     | nome do usuário                       | texto    | sim         |
| e-mail   | e-mail do usuário                     | texto    | sim         |
| senha    | senha do usuário                      | texto    | sim         |
| cadastrar| cadastrar                             | botão    |             |

### Login

- [X] login successfully
- [X] field blank e-mail
- [X] field blank password
- [X] field invalid e-mail
- [X] field invalid password

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| e-mail   | e-mail do usuário                     | texto    | sim         |
| senha    | senha do usuário                      | texto    | sim         |
| login    | login                                 | botão    |             | -->

## Requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Configuração

1. Clone este repositório para sua máquina local:

```
git@github.com:edsonj82/cypress-qazando-api.git
```

2. Navegue até o diretório do projeto:

```
cypress-qazando-api
```

3. Instale as dependências do projeto:

```
npm init -y
npx cypress install --force
```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```
npx cypress run
```

Isso abrirá a interface do Cypress, onde você poderá selecionar os testes que deseja executar.

## Estrutura do Projeto

- **cypress/e2e**: Contém os arquivos de teste escritos em JavaScript usando o framework Cypress.
- **cypress/support**: Contém arquivos de suporte, como comandos personalizados ou configurações globais.
- **cypress/fixtures**: Contém dados estáticos para serem utilizados nos testes.

## Contribuindo

Sinta-se à vontade para contribuir com novos testes, melhorias ou correções de bugs. Basta fazer um fork deste repositório, fazer suas alterações e enviar um pull request.

## Recursos Adicionais

Para mais informações sobre o framework Cypress, consulte a [documentação oficial](https://docs.cypress.io/).

## Atribuições

Agradecimentos especiais a Eduardo Finotti e Hebert Soares pelo desenvolvimento e manutenção da aplicação para a realização do estudos de testes que foram desenvolvidos pela QAzando.