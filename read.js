const { Client } = require('pg');

const client = new Client();

// const client = new Client({
//     user: 'esthonjr',
//     host: 'localhost',
//     database: 'testdb',
//     password: 'estadmin',
//     port: 5432,
// });

client.connect();

// Retrieving/Selecting Data

// const query = `
// SELECT *
// FROM users
// `;

// return all users younger than 30
const query = `
SELECT *
FROM users
WHERE age>0
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});

module.exports = {
    psqlRead: () => {
      console.log('read');
    },
  };
