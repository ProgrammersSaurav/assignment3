var http = reqire('http')

var server = http.createServer(function (req, res) {
  res.end("hello world")
});

server.listen(5500);

console.log("server success");
