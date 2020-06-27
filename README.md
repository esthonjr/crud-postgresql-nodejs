Este pacote é um exemplo simples de CRUD (Create, read, update and delete) com nodejs + postgresql no linux.

- [Para instalar este pacote](#para-instalar-este-pacote)
- [Para executar as operações](#para-executar-as-operações)
- [Para instalar e setar o postgresql no linux (exemplo)](#para-instalar-e-setar-o-postgresql-no-linux-exemplo)

# Para instalar este pacote
- npm install

# Para executar as operações

- node create 
- node read 
- node update 
- node insert 
- node delete

# Para instalar e setar o postgresql no linux (exemplo)
1. Instalar o postgresql: `sudo apt-get install postgresql`
2. Mudar a senha padrao do usuario postgres: `sudo passwd postgres` 
3. Logar no usuario postgres: `su - postgres` 
4. Usar o comando para checar se o usuario postgres tem acesso ao prompt do postgre: `psql`
5. No prompt do postgre, mudar o password do postgres no bd: `\password postgres`
6. Criar o bd: `CREATE DATABASE testdb;` (terminar o comando com ";")
7. Listar o bd: `\l`
8. Criar um novo usuário para o bd, senão tem que usar as credenciais do postgres: `CREATE USER esthonjr;`
9. Listar usuarios pra se certificar que criou ok: `\du`
10. Sair do prompt: `\q`
11. Ainda com o usuario postgres, logar no prompt do bd que foi criado: `psql testdb`
12. Dar privilégios para o usuário criado: `GRANT ALL PRIVILEGES ON DATABASE testdb TO esthonjr;`
13. Sair do prompt: `\q`
14. Deslogar do usuario postgres: `exit`
15. Agora podemos usar o novo usuario esthonjr para acessar o db, testar com: `psql testdb`
16. Criar um password para o novo usuário: `\password`
17. Sair do prompt: `\q`

