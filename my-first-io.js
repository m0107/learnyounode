//Third Program

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
	data = fs.readFileSync(fileName.toString(),"utf8");
	console.log(data.split('\n').length-1);
}
catch(e) {
	console.log('Error:', e.stack);
}