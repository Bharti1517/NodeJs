

function log(req,res,next){
  console.log('logger file logged...');
  next()
}

module.exports = log;