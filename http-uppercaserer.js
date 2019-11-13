// Thirteen program

'use strict'

var http = require('http');
var fs = require('fs');
let port = process.argv[2];

http.createServer(function(req, res) {
	if (req.method == 'POST') {
		const map = require('through2-map')
		req.pipe(map(function (chunk) {
		  return chunk.toString().toUpperCase();
		})).pipe(res)
	}
}).listen(port);