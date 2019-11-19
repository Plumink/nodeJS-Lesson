// const stream = require("stream");
// var aa = stream.Readable;
// function MyReadable(){
//     aa.call(this);

// }
// MyReadable.prototype.__proto__ = aa.prototype;
const stream = require("stream");
var reader = new stream.Readable();

reader.push("a-z");
reader.push(null);
reader.pipe(process.stdout);