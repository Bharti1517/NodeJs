var express = require('express');
var router = express.Router();
var con = require('../../db/mysql/connection');

router.use(express.json());

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.get('',function(req,res){
  var sql = "select * FROM user ";
  con.query(sql,function(err,data){
      if(err) console.log(err);
      res.send(data);
  });
});

  router.get('/role',function(req,res){
        var sql = "select * FROM role ";
        con.query(sql,function(err,data){
            if(err) console.log(err);
            res.send(data);
        });
  });
  router.get('/manager',function(req,res){
    var sql = "select userID , firstName , lastName , roleName  FROM user,role where role.roleId = user.roleId and role.roleName LIKE '%Manager'";
    con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
});
var id;
  router.post('/registerUser',function(req,res){
    
    con.query("select count(*)+1 as id from user",function(err,data){
      if(err) console.log(err);
      id = data[0].id;
      console.log(id,req.body.roleID,req.body.firstName,req.body.lastName,req.body.emailID , req.body.description,req.body.designation,req.body.userName , req.body.password,req.body.managerID,req.body.allocation,req.body.state) ;
      var sql = "insert into user (userID , roleID , firstName , lastName , emailID , description , designation , username , password , managerID , allocation , state )  values("+id+","+req.body.roleID+",'"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.emailID+"','"+req.body.description+"','"+req.body.designation+"','"+req.body.userName +"','"+ req.body.password+"',"+req.body.managerID+","+req.body.allocation+","+req.body.state+") ";
      con.query(sql,function(err,data){
        if(err) console.log(err);
        res.send(data);
    });
  });

});

  module.exports = router;