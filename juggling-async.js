// Ninth program

'use strict'
var http = require('http');
var result = [];
var counter = 0;

var  httpCall = function(index_g) {
	http.get(process.argv[index_g], (resp) => {
		let data = '';
		var index = index_g
		resp.on('data', (chunk) => {
			data += chunk;
		});

		resp.on('end', () => {
			result[index-2] = data.toString();
			counter++;
			if (counter == 3)
				console.log(result[0]+"\n"+result[1]+"\n"+result[2]);
		});
		resp.on('error', error => {
			console.error(error)
		  });
	}).on('error', error => {
		console.error(error)
	});
}

for (let index = 2; index < 5; index++){
	httpCall(index);
}
