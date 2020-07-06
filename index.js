require('dotenv').config();

var psqlRead = require('./read');

var args = process.argv.slice(2);

// console.log(args);

switch (args[0]) {
    case 'create':
        psqlCreate();
        break;
    case 'read':
        psqlRead.psqlRead();
        break;
    case 'update':
        psqlUpdate();
        break;
    case 'delete':
        psqlDelete();
        break;
    case 'readCursor':
        psqlReadCursor();
        break;
    default:
        break;
}