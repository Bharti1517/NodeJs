
var eventEmitter = require('events').eventEmitter;
var getResource = function(c){
    var e  = new eventEmitter();
    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('data',++count)
            if(count===c){
                e.emit('end',count)
                clearInterval(t);
            }
        },10)
    })
    e.emit('start');
    return(e);
};

varr = getResource(3);
r.on('start',function(){
    console.log('Started counting ');
});
r.on('start',function(){
    console.log( 'Read data ' + d);
    
});

var server=http.createServer();
server.on('connection',function(){
    console.log('End Occured');
});
