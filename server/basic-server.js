/* Import node's http module: */
var http = require('http');
var handleRequest = require('./request-handler.js');
var url = require('url');
var utils = require('./utils.js');
var fs = require('fs');

var port = 3000;


var ip = '127.0.0.1';

var routes = {
  '/classes/messages': handleRequest,
  '/index.html' : handleRequest,
  '/bower_components/jquery/dist/jquery.js': handleRequest,
  '/scripts/app.js' : handleRequest,
  '/styles/styles.css' : handleRequest,
  '/images/spiffygif_46x46.gif' : handleRequest

};

var server = http.createServer(function(request, response) {
  var parsedURL = url.parse(request.url).pathname;
  console.log('parsedURL: ', parsedURL);
  if (routes[parsedURL]) {
  //console.log('prase  ', parsedURL);
    routes[parsedURL](request, response);
  } else {
    utils.sendResponse(response, 'NAT FOWND', 404);
  }
});
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);

