# crud-postgresql-nodejs

Este pacote é um exemplo simples de CRUD (Create, read, update and delete) com nodejs + postgresql no linux.

- [crud-postgresql-nodejs](#crud-postgresql-nodejs)
  - [Instalação](#instalação)
  - [Utilização](#utilização)
  - [Configuração do postgresql (Docker)](#configuração-do-postgresql-docker)
  - [Observações](#observações)
    - [Para configurar as variáveis de ambiente no linux (exemplo)](#para-configurar-as-variáveis-de-ambiente-no-linux-exemplo)
  - [TODO](#todo)

## Instalação
```bash
$ npm install
```

## Utilização

```bash
$ node create.js # para criar a tabela
$ node read.js # para ler
$ node read-cursor.js # para ler com cursor
$ node update.js # para fazer update
$ node insert.js # para inserir
$ node delete.js # para deletar
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

## Observações

- Há duas formas de conexão ao bd: single connection ou pool; 
- Para a leitura de dados no bd, dependendo do volume, pode afetar a performance do sistema porque as informações são carregadas na memória. Existe uma forma de leitura usando cursor que melhora isso daí;
- Na configuração de conexão ao bd (user, host, database, password, port), podemos colocar hardcoded ou usar variáveis do sistema (assim o código fica mais limpo e resguardamos informações privadas);
- O pool também usa variáveis de ambiente se não fornecermos as configs, a exemplo da single connection

### Para configurar as variáveis de ambiente no linux (exemplo)
```bash
$ PGUSER=esthonjr
$ PGHOST=localhost
$ PGDATABASE=testdb
$ PGPASSWORD=estadmin
$ PGPORT=5432
```
```bash
$ export PGUSER
$ export PGHOST
$ export PGDATABASE
$ export PGPASSWORD
$ export PGPORT
```

## TODO
- Modularizar ações
- pagina com exibicao do read