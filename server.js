var express = require("express");
var middleware = require("./middleware");
var app = express();
var port = process.env.port; 

 

app.use(middleware.logger);

app.get("/hakkimda",middleware.requireAuthentication,function(req,res){
    res.send("hakkımda sayfası");

})

app.use(express.static(__dirname + '/public'));

//console.log();

app.listen(port,function(){
    console.log("Express server  " + port + " nolu porttan  başlatıldı");
});
     