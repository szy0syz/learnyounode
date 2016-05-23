
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var extension = '.' +process.argv[3]

fs.readdir(folder,function(err,lists){
	if(err) return console.log(err)
	lists.forEach(function(value,index){
		if(path.extname(value) === extension){
			console.log(value)
		}
	})
})

// console.log('path:'+ path)
// console.log('extension:' + extension)

// fs.readdir(path,function(err,lists){
// 	var i = 0;
// 	var res = new Array();
// 	lists.forEach(function(value,index){
// 		console.log(value)
// 		if(value.indexOf('.' + extension)>0)
// 		{
// 			res[i] = value;
// 			i++;
// 		}
// 	})
// 	console.log(res)
// })

// fs.readdir(path,function(err,lists){
// 	lists.forEach(function(value,index){
// 		if(value.indexOf('.' + extension)>0)
// 		{
// 			console.log(value)
// 		}
// 	})	
// })