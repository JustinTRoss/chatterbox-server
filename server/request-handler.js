
var utils = require('./utils.js');
var url = require("url");
var path = require("path");

var _storage = {
  "/classes/messages" : {"results": []},
  "/classes/room" : {"results": []}
};


var actions = {
  GET: function(request, response) {
    utils.sendResponse(response, JSON.stringify(_storage[request.url], 200));
  },
  POST: function(request, response) {
    var body = '';
    request.on('data', function(chunk) {
      body += chunk;
    });
    request.on('end', function() {
      _storage[request.url].results.push(JSON.parse(body));
      utils.sendResponse(response, '{}', 201);
    });
  },
  OPTIONS: function(request, response) {
    utils.sendResponse(response, 'null');
  }
};

module.exports = function(request, response) {
 
  // console.log('Serving request type ' + request.method + ' for request url ' + request.url);

  if (actions[request.method]) {
    actions[request.method](request, response);
  } else {
    utils.sendResponse(response, null, 404);
  }
};
//

