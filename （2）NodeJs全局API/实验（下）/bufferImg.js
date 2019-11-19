const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"./1.jpg");
    var imgBuffer = fs.readFileSync(imgPath);
    var base64Data = imgBuffer.toString("base64");
    console.log(base64Data);

}).listen(8081);