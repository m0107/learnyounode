//Fourth Program

'use strict'


let fileName;
let data;

const fs = require('fs');
fileName = process.argv[2];
if (!fileName)
{
	console.log("please provide File Name as argument");
	return ;
}
try{
	fs.readFile(fileName,"utf8", (err, data) => {
		if (err) throw err;
		console.log(data.split('\n').length-1);
	});
	
}
catch(e) {
	console.log('Error:', e.stack);
}