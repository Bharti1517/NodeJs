var express = require('express');
var router = express.Router();
var con = require('../../db/mysql/connection');
router.use(express.json());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('',function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);
    var sql = " select * from user , role  where user.emailID =  '"+req.body.email+"' and user.password='"+req.body.password+"' and user.roleId = role.roleId";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});

  module.exports = router;