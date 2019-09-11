var circleFun = function(r){
    var res;
    var res1;
    function circunference(){
        res = 2 * 3.14 * r;
        return res;
    }
    function area(){
        res1 = 3.14 * r * r;
        return res1;
    }
   var fin = {
    circunference:circunference(),
    area:area()
   }
   console.log(fin);
//    return fin;
}
module.exports = {
    circleFun:circleFun
}