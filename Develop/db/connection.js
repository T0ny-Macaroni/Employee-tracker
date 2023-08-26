const mysql = require('mysql2');

// get connected to sql so the index.js can reference the sql files.
const connect = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'department_db'
})

module.export = connect;