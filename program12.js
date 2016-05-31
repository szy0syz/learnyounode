var map = require('through2-map')
var http = require('http')

var port = process.argv[2]

var server = http.createServer(function(req,res){
    if(req.method == "POST"){
        res.writeHead(200,{'content-type':'text/plain'})
        var postdata = ""
        req.addListener('data',function(chunk){
            postdata += chunk
        })
        console.log(postdata)
        // console.log("It's a "+ req.method)
        // req.pipe(res)
        //res.setEncoding('utf8')
        // console.log(req)
        // req.pipe(map(function(chunk){
        //     return chunk.toString().split('').reverse().join('')
        // })).pipe(res)
    }
    if(req.method == "GET"){
        console.log('GET')
    }
    
})

server.listen(port)
console.log('server running at %j',port)