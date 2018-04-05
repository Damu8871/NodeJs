var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello new!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
}).listen(8084);

console.log('Server started');
