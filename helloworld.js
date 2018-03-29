var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-type':'text/plain'});
res.end('Hello World!');
}).listen(8001);

console.log('Application is running on the port over 8001 yes !!'!);
