const express = require('express');
var app = express();

var con1 = require('./connection');
app.use(express.static('express'));
app.get('/',function(req,res){
    var sql = "Select * from user , role where user.roleID =role.roleID ";
    con1.query(sql,function(err,data){
        if(err)  console.log(err) ;
        res.send(data);
        res.end();
    });
    
});
app.post('/Post',function(req,res){
    console.log("Post Request ");
    res.send('Hello World post');
});
app.delete('/del',function(req,res){
    console.log("Delete Request ");
    res.send('Hello World delete');
});
app.put('/put',function(req,res){
    console.log("Put Request ");
    res.send('Hello World put');
});

var server = app.listen(8000,function(){
    var address = server.address().address;
    var port = server.address().port;
    console.log(" Listning on port http://%s:%s",address,port);
});
