var fs=require('fs')


var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    
    fs.writeFile('demo.txt', 'hello world',function (error) {
       
      if (error) {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("file write fail")
        res.end();
      }
      else {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("file write success")
        res.end();
      }
    })
  }
});

server.listen(5500);

console.log("server success");
