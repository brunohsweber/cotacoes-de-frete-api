<br>

<h1 align="center">
Deliveries Quotations API
</h1>

<br>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-informações-importantes">Importante!</a>
</p>

<br>

# Sobre o projeto

Deliveries Quotations é um projeto pessoal o qual teve como objetivos:

- Construir uma API Rest completa, respeitando as melhores práticas de endpoints com o uso correto dos recursos e verbos HTTP
- Desenvolver um sistema CRUD completo para gerenciamento de cotações de frete, com autenticação e permissão de rotas para os usuários
- Reforçar os conhecimentos do framework Express e do TypeScript
- Aprender a utilizar mais recursos do ORM Prisma para lidar com banco de dados, tais como: montar o schemas, alimentar o banco de dados com um arquivo Seed, geração de Migrations para versionamento das tabelas e comandos em geral
- Estruturar e lidar com Regras de Negócio da aplicação
- Aprimorar a elaboração de casos de uso onde são utilizados validações de autenticação, permissão de rotas e recursos
- Reforçar como fazer uma autenticação com JWT de forma eficiente
- Deixar a aplicação mais delegável com o uso de Middlewares
- Praticar e respeitar princípios SOLID na arquitetura de aplicações para deixar o código mais legível e limpo

### :rocket: Tecnologias e Principais Ferramentas:

- Node.js
- Express
- Typescript
- Prisma
- PostgreSQL
- BCrypt.js
- JWT
- Docker e Docker-Compose

## :information_source: Como Usar?

1 - Para executar esta aplicação, você precisará ter instalado no seu computador:

- Git
- Node.js
- Yarn
- Docker com Docker Compose
- Postgres
- Postbird ou Beekeeper
- Insomnia

2 - Para rodar a aplicação, realize cada uma das etapas abaixo no terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/brunohsweber/deliveries-quotations-api

# Entre no repositório:
$ cd deliveries-quotations-api

# Instale as dependências:
$ yarn

# Instancie o Docker com Docker-Compose para subir o container do banco de dados:
$ docker-compose up

# Para rodar as migrations:
$ yarn prisma migration dev

# Alimente a tabela "freight_type" no banco de dados:
$ npx prisma db seed

# Para rodar a aplicação:
$ yarn dev

```
**Para acessar as rotas já configuradas pelo Insomnia, é possível importar o arquivo JSON:**
[Clique aqui para acessar o arquivo JSON](https://github.com/brunohsweber/deliveries-quotations-api/blob/main/collection_Insomnia_v1.0.0.json)

<br>

## :warning: Informações Importantes

Este projeto está em versão inicial e novas features poderão ser lançadas futuramente.

<br>

---

Feito com ♥ por [Bruno Weber](https://brunoweber.com.br) :wave: