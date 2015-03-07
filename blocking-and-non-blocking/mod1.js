var http = require("http");
var url = require("url");
var qs = require("querystring");

function start( route, handle ) { //<--ready route HERE ...
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname
      , o = url.parse(request.url)
      , querystring = ~request.url.indexOf('?') /* you can play for(var k in {a:1,b:1,x:1})if(~'ab'.indexOf(k)){console.log(k+'Yes');} */
                      ? qs.parse( request.url.split('?')[1] ) /* MUST split for qs */ 
                      : {}; 
    
    // console.log(o);
    // console.log(o.query);//run me at http://127.0.0.1:8888/sadlkfa?a=1&b=bbb&c=cc
    // console.log( querystring );
    
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

