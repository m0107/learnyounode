// Second program

'use strict'

let len;
let ans;

ans = 0;
len = process.argv.length;
for (let index = 2; index < len; index++) {
	ans += parseInt(process.argv[index]);
}

console.log(ans);
