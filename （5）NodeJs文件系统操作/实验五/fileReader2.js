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
        fs.open(process.argv[1],"r+",(err,fd)=>{
            var statObj = fs.statSync(process.argv[1]); 
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,(err,by,buff)=>{
                if(err){
                    console.log(err);
                }else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });

        });
        
        
    }
    else{
        var pathName = path.join(__dirname,fileName);
        fs.open(pathName,"r+",(err,fd)=>{
            var statObj1 = fs.statSync(pathName); 
            var buf1 = Buffer.alloc(statObj1.size);
            fs.read(fd,buf1,0,statObj1.size,0,(err,dy,buff)=>{
                if(err){
                    console.log(err);

                }else{
                    res.end(buf1.toString());
                    res.close(fd,(err)=>{
                        //fs.close(fd,callback())
                        //fs.close()的回调函数只有一个参数err，返回错误，没有其他参数。
                        console.log(err);
                    });
                }
            })
        })
    }
}).listen(8082);
