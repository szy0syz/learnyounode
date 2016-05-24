// var module = require('./mymodule.js')

// var callback = function(err,fileList){
// 	if(err) console.log(err)
// 	else fileList.forEach(function(file,index){
// 		console.log(file)
// 	})
// }

// module(process.argv[2],process.argv[3],callback)

var module = require('./mymodule.js')

var callback = function(err,fileList){
	if (err)
		console.log(err)
	else fileList.forEach(function(file,index){
		console.log(file)
	})
}

module(process.argv[2],process.argv[3],callback)