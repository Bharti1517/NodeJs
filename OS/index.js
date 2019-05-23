const os = require('os');

console.log(os.hostname() + ' HostName ');


console.log(os.freemem() + ' freemem ');


console.log(` Total Memory : ${os.totalmem()} and freememory is ${os.freemem()}`);  //ES6 Syntax 

// console.log(' Total Memory :' + os.totalmem() + 'and freememory is : ' + os.freemem());  //ES6 Syntax
