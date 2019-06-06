var express = require('express');
var router = express.Router();
const con = require('./connection');

router.get('/userDetails',function(req,res){
    var sql = " select * from user left outer join role on user.roleId = role.roleId ;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
router.post('/post',function(req,res){
    console.log('kjhsak post');
    res.send("You just called the post method at '/hello'!\n");
});
router.all('/all',function(req,res){
    console.log('kjhsak post');
    res.send("You just called the ALL method at '/hello'!\n");
});

router.get('/userProgramDetails',function(req,res){  // Pending 
    var sql = " select * from user , access_table , role   where user.userID = access_table.userID and user.roleID = role.roleId ;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
});

module.exports = router;