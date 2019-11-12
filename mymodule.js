// Sixth program

'use strict'

var path = require('path');
const fs = require('fs');

module.exports = function (dirName, filter, callback) {

	let items;

	try{
		fs.readdir(dirName, function(err, items) {
			if (err) {
				return callback(err);
			}
			items = items.filter(function(x) {
				return path.extname(x) == "."+filter;
			})
			callback(null, items);
		});
	}
	catch(e) {
		console.log('Error:', e.stack);
	}
}
