var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World from mod1.js");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started in mod1.js.");
}

exports.start = start;

