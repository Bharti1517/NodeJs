//-------------ACCESS FUNCTION -----------------------
 const calFun = require('./exportFunction.js'); 
// console.log("\n Module Export Function : " + calFun.add(33,11));  // getting error because function can't be access directly 


// --------------------ACCESS VARIABLE -------------------------
const calVar = require('./exportVariable.js'); 
console.log(calVar);

//---------------------ACCESS MULTIPLE FUNCTIONS------------------------------
const calMulVar = require('./exportMultiFunctionsVariables.js/index.js');
console.log("Add Value is : " + calMulVar.add(3,5));
console.log("Multiply Value is : " + calMulVar.multiply(3,5));
console.log("Access Value from obj in exportMultiFunction.js : " + calMulVar.name);