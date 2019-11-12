// Fifth program

'use strict'

var path = require('path');

let dirName;
let items;

const fs = require('fs');
dirName = process.argv[2];
if (!dirName)
{
	console.log("please provide Dir path as argument");
	return ;
}
try{
	fs.readdir(dirName, function(err, items) {
		for (var i=0; i<items.length; i++) {
			if (path.extname(items[i]) == ("."+process.argv[3]))
				console.log(items[i]);
		}
	});
}
catch(e) {
	console.log('Error:', e.stack);
}