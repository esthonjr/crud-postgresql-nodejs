# crud-postgresql-nodejs

Este pacote é um exemplo simples de CRUD (Create, read, update and delete) com nodejs + postgresql no linux.

- [crud-postgresql-nodejs](#crud-postgresql-nodejs)
  - [Instalação](#instalação)
  - [Utilização](#utilização)
  - [Instalação do postgresql no linux (exemplo)](#instalação-do-postgresql-no-linux-exemplo)
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

## Instalação do postgresql no linux (exemplo)
1. Instalar o postgresql: 
   ```bash
   $ sudo apt-get install postgresql
   ```
2. Mudar a senha padrao do usuario postgres: 
   ```bash
   $ sudo passwd postgres
   ``` 
3. Logar no usuario postgres: 
   ```bash
   $ su - postgres
   ``` 
4. Usar o comando para checar se o usuario postgres tem acesso ao prompt do postgre: 
   ```bash
   $ psql
   ```
5. No prompt do postgresql, mudar o password do postgres no bd: 
   ```
   postgres=# \password postgres
   ```
6. Criar o bd (terminar o comando com ";"): 
   ```
   postgres=# CREATE DATABASE testdb;
   ``` 
7. Listar o bd: 
   ```
   postgres=# \l
   ```
8. Criar um novo usuário para o bd, senão tem que usar as credenciais do postgres: 
   ``` 
   postgres=# CREATE USER esthonjr;
   ```
9.  Listar usuarios pra se certificar que criou ok: 
    ```
    postgres=# \du
    ```
10. Sair do prompt: 
    ```
    postgres=# \q
    ```
11. Ainda com o usuario postgres, logar no prompt do bd que foi criado: 
    ```bash
    $ psql testdb
    ```
12. Dar privilégios para o usuário criado: 
    ```
    testdb=# GRANT ALL PRIVILEGES ON DATABASE testdb TO esthonjr;
    ```
13. Sair do prompt: 
    ```
    testdb=# \q
    ```
14. Deslogar do usuario postgres: 
    ```bash
    $ exit
    ```
15. Agora podemos usar o novo usuario esthonjr para acessar o db! Testar com: 
    ```bash
    $ psql testdb
    ```
16. Criar um password para o novo usuário: 
    ```
    testdb=> \password
    ```
17. Sair do prompt: 
    ```
    testdb=> \q
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
- postgresql no docker
- pagina com exibicao do read