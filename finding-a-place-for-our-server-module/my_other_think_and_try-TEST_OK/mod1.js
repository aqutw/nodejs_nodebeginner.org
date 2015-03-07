function start(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World from mod1.js (my_other_way_think_and_try)");
  response.end();
}

exports.start = start;

