// const { Client } = require('pg');

// const client = new Client({
//     user: 'esthonjr',
//     host: 'localhost',
//     database: 'testdb',
//     password: 'estadmin',
//     port: 5432,
// });

// client.connect();

const { Pool } = require('pg');

const pool = new Pool();

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

// Criando/Inserindo dados
const query = `
INSERT INTO users (email, firstName, lastName, age)
VALUES ('test@test.com', 'test', 'test2', 33)
`;

// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data inserted');
//     client.end();
// });

// client
//     .query(query)
//     .then(res => {
//         console.log('Data inserted');
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(() => {
//         client.end();
//     });

pool.connect((err, client, done) => {
    client
        .query(query)
        .then(res => {
            console.log('Data inserted');
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            client.end();
        });
});