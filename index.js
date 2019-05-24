const express = require('express');
const app = express(); 
const config = require('config');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');

//---------------------PUG--------------------------
app.set('view engine','pug');
app.set('views ','./views');


console.log("PROCESS ENV : " + process.env.NODE_ENV);
console.log(`Current Env is : ${app.get('env')}`);



//------------CUSTOME MIDDLEWARE-------------------
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/',home);
app.use('/api/courses',courses);
app.use(logger);


//app.use(morgan('tiny'));
//app.use(morgan('combined'));
// if(app.get('env')==='development'){
//     app.use(morgan('tiny'));
//     console.log('Morgan Enabled');
// }

app.use(function(req,res,next){
    console.log('Logging.............');  
    next()
  })
  app.use(function(req,res,next){
      console.log('MiddleWare.............');  
      next()
    })


console.log('--------------------CONFIGURATION ----------------');
console.log('Application Name : ' + config.get('name'));
console.log('Mail Server Name  : ' + config.get('mail.host'));

//---------- ANOTHER SYNTAX FOR WRITING FUNCTION ------------------
//app.get('/',function(req,res){
//})
//-------------------MIDDLEWARE FOR HANDLING HTTP PORT  -------------------
app.use(express.json(courses)); // Converting courses data to JSON  // Bind application-level middleware to an instance of the app object by using the app.use() 
//PORT 
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on ${port} \n http://localhost:${port}  OR \n http://localhost:${port}/api/courses`));

