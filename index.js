console.log("Hello Node.js!")

// Import module
const http = require('http')

// Declare  an http server
/* http.createServer(function(req,res){

// Write a response header
res.writeHead(200, {'Content-Type': 'text/plain'});

// write response content
res.end('Hello world\n');

// Start the server
}).listen(8080) */

// define a string constant concatenating strings

const content = '<!DOCTYPE html>' +
'<html>' +
'   <head>' +
'       <meta charset="utf-8" />' +
'   </head>' +
'   <body>' +
'       <p> test\n CONCHEZ </p>' +
'   </body>' +
'</html>'

//Import Node url module
const url = require('url')
const qs = require('querystring')

/*const serverHandle = function(req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(content);
    res.end();
}*/

const serverHandle = function (req, res){
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);

    res.writeHead(200, {'Content-Type' : 'text/html'} );
    res.write(content);
    res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)
