var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function(req,res){
	if(req.method != "GET") 
		return console.log("Give me a Get")

	res.writeHead(200,{'Content-Type':'application/json'})
	
	console.log(req.url)
	//var date = new Date()

	if (req.url == "/api/unixtime"){
		console.log(Date.now())
	}

	if (req.url == "/api/parsetime") {
		console.log(Date.now())
	}

	res.end()

})

server.listen(port)
console.log("server running at %j",port)

