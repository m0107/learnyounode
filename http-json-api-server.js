// Twelth program

'use strict'

// Eleventh program

'use strict'

var http = require('http');
var fs = require('fs');
let port = process.argv[2];

http.createServer(function(req, res) {
	
	const reqUrl = new URL(req.url, 'http://example.com')
	const time = new Date(reqUrl.searchParams.get('iso'))
	let result;

	if (/^\/api\/parsetime/.test(req.url)) {
		result = {
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds()
		}
	  } else if (/^\/api\/unixtime/.test(req.url)) {
		result = {
			 unixtime: time.getTime()
		}
	  }
	  res.writeHead(200, { 'Content-Type': 'application/json' })
	  res.end(JSON.stringify(result))
}).listen(port);