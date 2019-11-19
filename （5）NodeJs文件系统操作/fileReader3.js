// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// var name = process.argv[2];
// var filePath = path.join(__dirname,"/"+name);

// var server = http.createServer(function(req,res){
//     fs.open(filePath,(err,fd)=>{
//         if(err){
//             throw err;
//         }
//         console.log("read successfully!");
//         var buffer = new Buffer(255);
//         fs.read(fd,buffer,0,10,0,(err,bytesRead,buffer)=>{
//             if(err){
//                 throw err;
//             }
//             res.write(bytesRead, buffer.slice(0, bytesRead).toString());
//             // res.end();
//             fs.close(fd);
//         })

//     })
// });
// server.listen(8081);


// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// var name = process.argv[2];
// var filePath = path.join(__dirname,"/"+name);

// var server = http.createServer(function(req,res){
//     if(name == null){
//         res.end("not found!");
//     }
//     else{
//         fs.readFile(filePath,function(err,data){
//             if(err){
//                 res.end("Error!");
//             }
//             else{
//                 res.write(data.toString());
//                 res.end();
//             }
//         })       
//     }
// });
// server.listen(8082);

const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);
        
    }else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            var reader = fs.createReadStream(pathName);
            reader.pipe(res);
        }else{
            console.log("Error");
        }
  
    }

}).listen(8083);
