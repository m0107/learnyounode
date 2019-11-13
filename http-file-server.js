// Eleventh program

'use strict'

var http = require('http');
var fs = require('fs');
let port = process.argv[2];

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  let fileName = process.argv[3];

  // For Header
  res.writeHead(200, { 'content-type': 'text/plain' });

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(fileName);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(port);