var con = require('mysql');

con.createConnection({
    host : 'localhost',
    database : 'landandexpand_3',
    password : '',
    user :  'root' 
});

console.log('Connected');