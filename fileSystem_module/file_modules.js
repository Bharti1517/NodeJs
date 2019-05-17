var fs = require('fs');
console.log("------------------write mode  file------------------");
fs.readFile('README.txt','w',function(err){
    if(err) throw err;
    console.log(" \n NON BLOCKING :  \n ");
})
