const https = require("https");
const cherrio = require("cherrio");



https.createServer((req,res) =>{
    https.get("https://maoyan.com/films",(res) =>{
        var result = "";
        res.on("data",function(chunk){
            result += chunk;
            })
        res.on("end",function(){
            return result;
            })
    })
    res.on('end',() =>{
        const $ = cherrio.load(result);
        var movieList = [];
        $(".movie-item-title a").each(function(){
            var movie = {};
            movie.movieId = $(this).attr("data-val").slice(9,-1);
            movie.movieName = $(this).text();
            if(isNaN(parseInt($(this).parent().next().text()))){
                movie.movieRange = "暂无评分";
            }
            else{
                movie.movieRange = $(this).parent().next().children(".integer");
            }
            movie.movieRange == "暂无评分";
            

        })
    })
})

