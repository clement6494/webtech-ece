console.log("Hello Node.js!")

// Import module
const http = require('http')

// Declare  an http server
http.createServer(function(req,res){

// Write a response header
res.writeHead(200, {'Content-Type': 'text/plain'});

// write response content
res.end('Hello world\n');

// Start the server
}).listen(8080)