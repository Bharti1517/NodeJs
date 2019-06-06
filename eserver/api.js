var express = require('express');
var router = express.Router();
var con = require('./connection');

router.get('/userDetails',function(req,res){
    var sql = " select * from user left outer join role on user.roleId = role.roleId ;";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
router.get('/userbyid/:id',function(req,res){
    var sql = " select * from user , role  where user.userId = "  + req.params.id + " and user.roleId = role.roleId ";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
router.get('/userbyidandname/:name/:id',function(req,res){
    var sql = " select * from user where user.userId = "  + req.params.id + " AND user.username = '" + req.params.name + "' ";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
router.post('/post',function(req,res){  // not accessing 
    console.log('kjhsak post');
    res.send("You just called the post method at '/hello'!\n");
});
router.all('/all',function(req,res){
    res.send("You just called the ALL method at '/hello'!\n");
});



module.exports = router;