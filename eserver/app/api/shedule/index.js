var express = require('express');
var router = express.Router();
var con = require('../../db/mysql/connection');
router.use(express.json());
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });