var http = require("http");
var mod1 = require("./mod1");

http.createServer(mod1.start).listen(8888);

console.log('running');

