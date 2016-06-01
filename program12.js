// var map = require('through2-map')
// var http = require('http')

// var port = process.argv[2]

// var server = http.createServer(function(req,res){
        
//     if(req.method == "POST"){
//         res.writeHead(200,{'content-type':'text/plain'})
        
//         req.pipe(map(function(chunk){  
//             return chunk.toString().toUpperCase()
//         })).pipe(res)
//     }
//     if(req.method == "GET"){
//         console.log('GET')  
//     }  
// })

// server.listen(port)
// console.log('server running at %j',port)

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req,res){
	if(req.method != "POST")
		return console.log("Give me a post.")

	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(process.argv[2])
console.log('server running at %j',process.argv[2])