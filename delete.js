const { Client } = require('pg');

const client = new Client({
    user: 'esthonjr',
    host: 'localhost',
    database: 'testdb',
    password: 'estadmin',
    port: 5432,
});

client.connect();

// Deleting Data

const query = `
DELETE FROM users
WHERE email = 'test@test.com'
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data deleted');
    client.end();
});