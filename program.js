// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// var tmp = str.split('\n');
// console.log(tmp.length - 1);

// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length-1
// console.log(lines)

var fs = require('fs')

fs.readFile(process.argv[2],function (err,data)
{
	if(err) throw err;
	var contents = data;
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
})