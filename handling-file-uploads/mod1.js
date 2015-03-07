var http = require("http");
var url = require("url");
var qs = require("querystring");

function start( route, handle ) { //<--ready route HERE ...
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(handle, pathname, response, request);

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

