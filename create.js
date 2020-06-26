const { Client } = require('pg');

const client = new Client({
    user: 'esthonjr',
    host: 'localhost',
    database: 'testdb',
    password: 'estadmin',
    port: 5432,
});

client.connect();

// Criando tabela
const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table created');
    client.end();
});