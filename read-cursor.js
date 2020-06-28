const { Pool } = require('pg');
const Cursor = require('pg-cursor');

const pool = new Pool();

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
