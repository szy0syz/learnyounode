// var fs = require('fs')
// var http = require('http')

// var portNum = process.argv[2]
// var filePath = process.argv[3]

// var server = http.createServer(function(req,res){
// 	var readable = fs.createReadStream(filePath)
// 	readable.pipe(res)	
// })

// server.listen(portNum)
// console.log('server is running at port: %j.',portNum)

//----offical

var http = require('http')
var fs = require('fs')

var portNum = process.argv[2]
var filePath = process.argv[3]

var server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/plain'})
	fs.createReadStream(filePath).pipe(res)
})

server.listen(Number(portNum))
console.log('server running at %j port.',portNum)

// var server = net.createServer(function(socket){
// 	console.log('it has a client connected.')
// 	socket.end("szy server!")
// }).on('error',(err)=>{
// 	console.error(err)
// }).on('end',()=>{
// 	console.log('it has a client disconnected.')
// })


// var server = http.createServer(function(request,respnse){
// 	var writableStream = fs.createWriteStream(fileNameStr)
// 	var readableStream = fs.createReadStream(request)
// 	readableStream.pipe(writableStream)
// })