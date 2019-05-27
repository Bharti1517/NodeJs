//----------------------Intializing Buffer----------------------------
buf = new Buffer(256);

//----------------------Writing in Buffer----------------------------
len = buf.write("Bharti");
console.log("Buffer Write : " + buf);
console.log("Length  : " + len);

//-------------------Reading from Buffers----------------------------
for (i = 0 ; i<=len ; i++ ){
    console.log( buf[i+97]);
}
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

//-------------------Convert Buffer to JSON  =>  buf.toJSON()----------------------------
var bufJSON = buf.write("Simply Bharti ");
var json = buf.toJSON(bufJSON);
console.log(json);  // don't use like console.log(' json : '+json ); it will produce object 