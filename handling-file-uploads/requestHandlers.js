var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
var FINAL_IMG_PATH = "../../../20150307test_nodejs.jpg";

function start( response ) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload( response, request ) {
  console.log("Request handler 'upload' was called.");
  
  var form = new formidable.IncomingForm();
  form.uploadDir = "./tmp"; // solve "cross-device link not permitted", see http://cssor.com/nodejs-fs-renamesync-error-exdev-cross-device-link-not-permitted.html
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, FINAL_IMG_PATH);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });

}

function show(response) {
  console.log("Request handler 'show' was called.");
  fs.readFile(FINAL_IMG_PATH, "binary", function(error, file) {
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
