const express = require('express');
var app = express();
const api = require('./api.js');
app.use('/api',api);

var server = app.listen(8000,function(){
    var port = server.address().port;
    console.log(" Listning on port http://localhost:%s",port);
});
