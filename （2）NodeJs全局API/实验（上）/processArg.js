var arg = process.argv[2];
if(arg == "-h" || arg == undefined){
    console.log("Can you need help?");
}else{
    var result = eval(arg);
    console.log(arg + "=%s",result);

}