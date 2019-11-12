// Seventh program

'use strict'

var http = require('http');

http.get(process.argv[2], (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (data) => {
    console.log(data.toString());
  });
  resp.on('error', error => {
	console.error(error)
  });
}).on('error', error => {
	console.error(error)
});