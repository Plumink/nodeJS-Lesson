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
        var str = "";
        /**
         * fs.readFile()是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行后面的语句
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],(err,data)=>{
            if(err){
                console.log("Error!");
            }else{
                str = data.toString();
                res.end(str);
            }
        })
        
    }else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.end(data.toString());
                }
            })
        }
        else{
            // res.end("File not found!");
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
        }
    }

}).listen(8083);
