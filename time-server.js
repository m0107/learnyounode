// Tenth program0

'use strict'

const net = require('net')
let port = process.argv[2];
var d = new Date();
const server = net.createServer(function (socket) {
	var yy = d.getFullYear();
	var M = checkZero(d.getMonth()+1); // starts at 0
	var dd = checkZero(d.getDate()); // returns the day of month
	var hh = checkZero(d.getHours());
	var m = checkZero(d.getMinutes());
	var data = yy+"-"+M+"-"+dd+" "+hh+":"+m+"\n";
	socket.end(data);
	server.on('error', (err) => {
		throw err;
	  });
})
server.listen(port)

function checkZero(i)
{
	return (i < 10 ? '0' : '') + i
}