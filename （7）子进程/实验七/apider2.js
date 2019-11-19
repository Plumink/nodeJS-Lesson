const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");

http.createServer((req,res) =>{
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == '/'){
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    
    }
    else if(pathName == "/getlist"){
        https.get("https://maoyan.com/films",(resObj) =>{
            var result = "";
            resObj.on("data",function(chunk){
                result += chunk;
            })
            resObj.on("end",function(){
                res.end(result);
            })
        })
    }
    res.on('end',() =>{
        var $ = cherrio.load(result);
        

    })
}).listen(8082);