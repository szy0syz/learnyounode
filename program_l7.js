var http = require('http')
var targetUrl = process.argv[2]

function callback(res){
	res.setEncoding('utf8')
	res.on('error',(e) =>{ console.log(e)})
	res.on('data',(d)=>{console.log(d)})
	//res.on('end',()=>{console.log("No more data in response.")})
}

http.get(targetUrl,callback)