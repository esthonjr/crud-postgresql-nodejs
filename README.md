# crud-postgresql-nodejs

Este pacote é um exemplo simples de CRUD (Create, read, update and delete) com nodejs + postgresql.

- [crud-postgresql-nodejs](#crud-postgresql-nodejs)
  - [Instalação](#instalação)
  - [Configuração do postgresql (Docker)](#configuração-do-postgresql-docker)
  - [Configuração das variáveis de ambiente](#configuração-das-variáveis-de-ambiente)
  - [Utilização](#utilização)
  - [Observações](#observações)

## Instalação
```bash
$ npm install
```

## Configuração do postgresql (Docker)
No diretório postgres executar:
```bash
$ docker-compose up
```
Para Conectar ao database. Utilizar o usuario, senha e bd especificados no database.env.
```
$ docker-compose run database bash
# psql --host=database --username=esthonjr --dbname=testdb
```

## Configuração das variáveis de ambiente
Editar o arquivo .env:
```bash
PGUSER=esthonjr
PGHOST=localhost
PGDATABASE=testdb
PGPASSWORD=estadmin
PGPORT=5432
```

## Utilização

```bash
$ node index.js create # para criar a tabela
$ node index.js read # para ler tabela
$ node index.js readCursor # para ler com cursor
$ node index.js update # para fazer update dos dados
$ node index.js insert # para inserir dados
$ node index.js delete # para deletar os dados
$ node index.js drop # para deletar a tabela
```

## Observações

- Há duas formas de conexão ao bd: single connection ou pool; 
- Para a leitura de dados no bd, dependendo do volume, pode afetar a performance do sistema porque as informações são carregadas na memória. Existe uma forma de leitura usando cursor que melhora isso daí;
- Na configuração de conexão ao bd (user, host, database, password, port), podemos colocar hardcoded ou usar variáveis do sistema (assim o código fica mais limpo e resguardamos informações privadas);
- O pool também usa variáveis de ambiente se não fornecermos as configs, a exemplo da single connection
