var exec = require("child_process").exec;

function start( response ) {
  console.log("Request handler 'start' was called.");
  var content = "empty";

  console.log('waiting for exec result....');
  exec("find /d/folder_which_has_many_files/", 
    { timeout: 10000, maxBuffer: 20000*1024 }, // if your files are tooooo many, add this line for decreasing your test time.
    function (error, stdout, stderr) {
    // content = stdout; #no need anymore
    console.log('exec result:');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout + stderr);
    response.end();
  });

  // return content; #incorrect way

}

function upload( response ) {
  console.log("Request handler 'upload' was called.");
  // return "Hello Upload"; #incorrect way
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload bbbbb");
  response.end();
}

exports.start = start;
exports.upload = upload;

