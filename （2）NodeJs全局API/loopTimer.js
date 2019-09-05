var start = setInterval(function loop(){
    console.log('I will loop forever!');
 
}, 500);
setTimeout(function(){  
    console.log("Game over!");
    clearInterval(start);
    
}, 5000);
