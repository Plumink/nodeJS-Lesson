var i=1;//定义一个标志
var user = new Object();//建立user对象
console.log("name:");
process.stdin.on("data",function(data){
    if(i == 1){
        user.name=data.toString("utf-8");
        i++;
        console.log("email:");
    }else if(i == 2){   
        user.email=data.toString("utf-8");
        i++;
        console.log("qq:");
    }else if(i == 3){    
        user.qq=data.toString("utf-8");
        i++;
        console.log("mobile:");
    }else if(i == 4){     
        user.mobile=data.toString("utf-8");
        console.log(user);
        process.exit();//退出
    } 
})

