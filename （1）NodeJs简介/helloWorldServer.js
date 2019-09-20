const http = require("http");

http.createServer((req,res)=>{
    res.end("hello World");

}).listen(8080);