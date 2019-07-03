
var express = require('express');
var app = express();
var api = require('./app/api');
bodyParser = require('body-parser'),
errorhandler = require('errorhandler');
var cors = require('cors');
var helmet = require('helmet');
var morgan = require('morgan');
var path = require('path');
var methodOverride = require('method-override');
var rfs = require('rotating-file-stream');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api',api);
// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
// create a rotating write stream
var accessLogStream = rfs('access.log', {
	interval: '1d', // rotate daily
	path: path.join(__dirname, 'log')
});

// close server 
var _closeServer = function() {
	console.log('close server ...');
	server.close();
};
// close server on process exit
process.on('exit', _closeServer);
var server = app.listen(process.env.PORT || 4040,function(){
    var port = server.address().port;
    console.log(" Listning on port http://10.120.87.56:%s",port);
});