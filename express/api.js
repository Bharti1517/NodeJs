const express = require('express');
var app = express();

var con1 = require('./connection');
app.get('/users',function(req,res){
    var sql = "Select * from user , role where user.roleID =role.roleID ";
    con1.query(sql,function(err,data){
        if(err) throw err ;
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
app.put('/',function(req,res){
    console.log("Put Request ");
    res.send('Hello World put');
});