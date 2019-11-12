// Eighth program

'use strict'

var http = require('http');

http.get(process.argv[2], (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk+"\n";
  });
  resp.on('error', error => {
	console.error(error)
  });
  resp.on('end', () => {
	console.log(data.toString());
  });
}).on('error', error => {
	console.error(error)
});