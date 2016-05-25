var http = require('http')
var bl = require('bl')

var targetUrl = process.argv[2]

http.get(targetUrl,function(res){
	res.pipe(bl(function(err,data){
		if (err)
			return console.error(err)		
		console.log(data.length)
		console.log(data.toString())
	}))
})
