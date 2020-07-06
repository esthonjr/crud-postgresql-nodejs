const { Client } = require('pg');
const { Pool } = require('pg');
const Cursor = require('pg-cursor');

const pool = new Pool();
pool.on('error', (err, client) => {
    console.error('Error:', err);
});

module.exports = {
    create: () => {
        const client = new Client();
        client.connect();

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
    },
    read: () => {
        const client = new Client();
        client.connect();

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
    },
    update: () => {
        const client = new Client();
        client.connect();

        const query = `
        UPDATE users
        SET age = 72
        WHERE email = 'test@test.com'
        `;
        
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
    },
    delete: () => {
        const client = new Client();
        client.connect();

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
    },
    insert: () => {
        const query = `
        INSERT INTO users (email, firstName, lastName, age)
        VALUES ('test@test.com', 'test', 'test2', 33)
        `;

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
    },
    readCursor: () => {
        (async () => {
            const client = await pool.connect();
            const query = 'SELECT * FROM users';
        
            const cursor = client.query(new Cursor(query));
        
            cursor.read(1, (err, rows) => {
                if (err) {
                    throw err
                }
                // if (rows.length == 0) {
                //     cursor.close(() => {
                //         client.end();
                //       });
                // }
                console.log('Primeira linha');
                console.log(rows);
        
                cursor.read(1, (err, rows) => {
                    if (err) {
                        throw err
                    }
                    console.log('Próxima linha');
                    console.log(rows);
                    
                });
            });
        })();
    },
    drop: () => {
        const client = new Client();
        client.connect();

        const query = `
        DROP TABLE users
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
            console.log('Table deleted');
            client.end();
        });
    }
  };
