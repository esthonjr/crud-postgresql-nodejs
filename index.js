require('dotenv').config();

const crud = require('./crud');
const psqlDocker = require('./psqlDocker');
// const readCursor = require('./read-cursor');

const args = process.argv.slice(2);

// console.log(args);

switch (args[0]) {
    case 'create':
        crud.create();
        break;
    case 'read':
        crud.read();
        break;
    case 'update':
        crud.update();
        break;
    case 'delete':
        crud.delete();
        break;
    case 'insert':
        crud.insert();
        break;
    case 'readCursor':
        crud.readCursor();
        break;
    case 'drop':
        crud.drop();
        break;
    case 'psql-start':
        psqlDocker.start();
        break;
    case 'psql-stop':
        psqlDocker.stop();
        break;
    default:
        break;
}