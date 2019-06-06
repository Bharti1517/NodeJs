var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    database : 'landandexpand_3',
    password : '',
    user :  'root' 
});
con.connect(function(err){
    if(err) throw err ; 
    console.log(' Database Connected');
});

module.exports = con ;