
exports.headers = {
  'Content-Type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};
 
exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  console.log(exports.headers);
  response.writeHead(statusCode, exports.headers);
  response.end(data);
};