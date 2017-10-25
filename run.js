var url  = require("url"),
    fs=require("fs"),
    http=require("http");
http.createServer(function (req, res) {
console.log("req.url:"+req.url);
    var pathname=__dirname+url.parse(req.url).pathname;
   
    fs.readFile(pathname,function (err,data){
                res.end(data);
            });
}).listen(8888);
console.log("Server running at localhost");