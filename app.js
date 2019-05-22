const fs = require('fs');
// fs.readFile('./file.txt','utf-8',function(err,data){
//     //if(err) throw err;
//     console.log(data);
// });
// console.log('file reading complete ');

var dirs = fs.readFileSync;
console.log("Dirs : " + dirs);
fs.writeFile('./file.txt','this is written using write file command from file app.js ',function(err){
    if(!err){
        console.log('File Written');
    }
});