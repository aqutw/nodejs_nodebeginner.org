var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start( response ) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload( response, postData ) {
  console.log("Request handler 'upload' was called.");
  var $_POST = querystring.parse(postData); // no mind, just miss PHP for a while
  // return "Hello Upload"; #incorrect way
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload bbbbb" + $_POST.text );
  response.end();
}

function show(response, postData) {
  console.log("Request handler 'show' was called.");
  fs.readFile("../../../1535680_694350110587235_281093121_n.jpg", "binary", function(error, file) {
    if(error) {
      console.log('ERRRRRRRRROR');
      console.log(error);
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      console.log('OOOOOOOOKKKKKKK');
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
