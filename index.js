var http=require("http");
const port=process.env.PORT||3000
var serve=http.createServer(function(req,res){
    res.write("<div ><h2>NAME:R.NIRSITHA</h2> </div>")
    res.write("<h1>HELLO WORLD</h1>");
    res.end();
});
serve.listen(port);
console.log("nirsi its working");