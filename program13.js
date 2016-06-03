// var http = require('http')
// var url = require('url')
// var port = process.argv[2]

// var server = http.createServer(function(req,res){
// 	if(req.method != "GET") 
// 		return console.log("Give me a Get")

// 	res.writeHead(200,{'Content-Type':'application/json'})
// 	console.log(req.url)
// 	var reqUrl = url.parse(req.url,true)
// 	var myDate = new Date(reqUrl.query.iso)

// 	///api/parsetime?iso=2016-06-03T03:26:26.968Z
// 	if (reqUrl.pathname == "/api/unixtime"){
// 		res.write(JSON.stringify({"unixtime":myDate.getTime()}))
// 	}

// 	///api/unixtime?iso=2016-06-03T03:26:26.968Z
// 	if (reqUrl.pathname == "/api/parsetime") {
// 		res.write(JSON.stringify({'hour':myDate.getHours(),'minute':myDate.getMinutes(),'second':myDate.getSeconds()}))
// 	}

// 	res.end()

// })

// server.listen(port)
// console.log("server running at %j",port)

var http = require('http')
var url = require('url')
var port = process.argv[2]

function parsetime(time){
	return {
		hour:time.getHours(),
		minute:time.getMinutes(),
		second:time.getSeconds()
	}
}

function unixtime(time){
	return {unixtime:time.getTime()}
}

var server = http.createServer(function(req,res){
	if(req.method != 'GET')
		return console.log('Give me a GET')

	var parsedUrl = url.parse(req.url,true)
	var mydate = new Date(parsedUrl.query.iso)
	var result

	if(parsedUrl.pathname == '/api/unixtime'){
		result = unixtime(mydate)
	}
	else if(parsedUrl.pathname == '/api/parsetime'){
		result = parsetime(mydate)
	}

	if (result) {
		res.writeHead(200,{'Content-Type':'application/json'})
		res.end(JSON.stringify(result))
	}
	else{
		res.writeHead('404')
		res.end()
	}

})

server.listen(port)
console.log('server running at %j',port)