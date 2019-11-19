const http =require('http');
const fs = require('fs');
const url = require('url');
const querystring = require("querystring");

http.createServer((req,res) =>{
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        console.log(strData);
    })

}).listen(8081)