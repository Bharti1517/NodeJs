var fs = require('fs');
console.log("------------------NON BLOCKING CODE EXAMPLE------------------");
fs.readFile('index.txt',function(err,data){
    if(err) return console.error(err);
    console.log(" \n NON BLOCKING : " + data.toString() + " \n ");
})


console.log("------------------ BLOCKING CODE EXAMPLE------------------");
var data = fs.readFileSync('index.txt');
console.log(" \n BLOCKING : " + data.toString() + " \n ");
