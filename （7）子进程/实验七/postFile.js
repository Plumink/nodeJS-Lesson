const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    var urlObj = url.parse(req,url);
    if(urlObj.pathname == "/"){
        var fileContent = fs.readFileSync("postfile.html");
        res.writeHead(200,{"Content-Type": "text/html"});
    }
    else if(urlObj.pathname == "/upload"){
        var strData = "";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
            var dataArr = strData.split("\r\n");
            console.log(dataArr);
            var fileData = dataArr.slice(4,dataArr.slice.length-2);
            fileData = fileData.join("\r\n");
            console.log(fileData);
            var buf = Buffer.from(fileData,"binary");

            fs.writeFileSync("1.jpeg",buf,{"encoding": "binary"});
            res.end("提交成功");
            
        })
    }
}).listen(8081);
console.log("server is listening 8081");