var express = require('express');
var router = express.Router();

var usersRouter = require('./user');
router.use('/user', usersRouter);

var loginRouter = require('./login');
router.use('/loginUser', loginRouter);

var revenueRouter = require('./revenue');
router.use('/revenue', revenueRouter);

// var costRouter = require('./cost');
// router.use('/cost', costRouter);

// var headcountRouter = require('./headcount');
// router.use('/headcount', headcountRouter);


// var sheduleRouter = require('./shedule');
// router.use('/shedule', sheduleRouter);

// var srfRouter = require('./srf');
// router.use('/srf', srfRouter);

router.get('/', function(req, res){
	res.send('/api is running...');
});

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


 module.exports = router;