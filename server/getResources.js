var url = require('url');
var path = require('path'); 
var utils = require('./utils.js');
var fs = require('fs');

var validExtensions = {
  '.json' : 'application/json',
  '.html' : 'text/html',      
  '.js': 'application/javascript', 
  '.css': 'text/css',
  '.txt': 'text/plain',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.png': 'image/png'
};

var readFile = function(filepath, response, ext) {
  fs.readFile(filepath, 'utf-8', function(err, data) {
    // console.log('data: ', data);
    if (err) {
      utils.sendResponse(response, JSON.stringify(err), 404);
      return;
    }
    utils.headers['Content-Type'] = validExtensions[ext];
    utils.sendResponse(response, data); 
  }); 
};

exports.checkValidExtension = function(request, response) {
  var filename = request.url || 'index.html';
  var ext = path.extname(filename);
  var localPath = __dirname; 
  var isValidExt = validExtensions[ext];

  if (isValidExt) {
    var filepath = `${__dirname}/../client/2016-06-chatterbox-client-solution/client${request.url}`;
    readFile(filepath, response, ext);
  }
  
};