var mod1 = require('./mod1');
var router = require("./router");

var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

mod1.start(router.route, handle);
