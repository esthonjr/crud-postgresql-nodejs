const { Client } = require('pg');

const client = new Client();

client.connect();

// Updating Data

const query = `
UPDATE users
SET age = 72
WHERE email = 'test@test.com'
`;

// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data updated');
//     client.end();
// });

client
    .query(query)
    .then(res => {
        console.log('Data updated');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
    });
