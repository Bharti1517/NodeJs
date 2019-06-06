const con = require('./connection');
const express = require('express');
var app = express();

app.get('/userDetails',function(req,res){
    var sql = " select * from user left outer join role on user.roleId = role.roleId ;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
app.get('/userDetails/:id',function(req,res){
    var sql = " select * from user where user.userId = id;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});

app.get('/userProgramDetails',function(req,res){  // Pending 
    var sql = " select * from user , access_table , role   where user.userID = access_table.userID and user.roleID = role.roleId ;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
});


var server = app.listen(8000,function(){
    var address = server.address().address;
    var port = server.address().port;
    console.log(" Listning on port http://%s:%s",address,port);
});
