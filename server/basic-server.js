/* Import node's http module: */
var http = require('http');
var handleRequest = require('./request-handler.js');
var url = require('url');
var utils = require('./utils.js');

var port = 3000;


var ip = '127.0.0.1';

var routes = {
  '/classes/messages': handleRequest
};

var server = http.createServer(function(request, response){
  var parsedURL = url.parse(request.url);

  if (routes[parsedURL.pathname]) {
    routes[parsedURL.pathname](request, response);
  } else {
    utils.sendResponse(response, 'NAT FOWND', 404);
  }
});
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);

