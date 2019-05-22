const http = require('http');

//------------------MEATHOD 1 ------------------------
// const server = http.createServer();
// server.on('connection',function(){   //do some action when server starts 
//     console.log('New Connection.................')
// })
// server.listen(3000);

//------------------MEATHOD 2 ------------------------
const server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('Hello')
        res.end()
    }
    if(req.url=='/api/courses'){
        res.write(JSON.stringify(['JS','JAVA','Python']))
        console.log('kjsd');
        res.end()
    }
}).listen(3000);
console.log("Running on http://localhost:3000")


// TO automate the server we can use weber , xammp , gulp 