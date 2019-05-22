
(function (exports, require, module, __filename, __dirname) { 
//var x = ;
var url = 'https://mylogger.io/log';
function log(message){
    console.log(message);
}

//----------------------DIFFERENT WAYS TO EXPORT LOGS -------------------
module.exports = log;   // Most Popular way to export 
module.exports.log = log;

})

//--------WRAPPED EVERTHING IN FUNCTION BECAUSE THESE ALL ARE GLOBAL ------------