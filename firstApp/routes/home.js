const express = require('express');
const Router = express.Router(); 

//---------- FIRST SYNTAX FOR WRITING FUNCTION --------------------
Router.get('/',(req,res)=>{
    //res.send('Hello World');
    res.render('index',{title:'Express With PUG ',message:'Pug is template engine of express '}) 
    // USES OF index.PUG FILE 
})

module.exports = Router;

