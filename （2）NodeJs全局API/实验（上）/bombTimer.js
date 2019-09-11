function Bomb(){
    this.message = "bomb!!!";
    this.explode = function(){
        console.log(this.message);
    }
}
var bb = new Bomb();
setTimeout(function(){
    bb.explode();
}, 2000);
