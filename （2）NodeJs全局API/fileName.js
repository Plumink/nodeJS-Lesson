const http = require("http");
const fs = require("fs");


var server = http.createServer(function(req,res){
    
    var htmlPath = __dirname + "\\views\\view.html";
    // console.log(htmlPath);
    var htmlContant = fs.readFileSync(htmlPath);
    res.write(htmlContant);
    res.end();
});
server.listen(8080);
console.log("this is 8080.");