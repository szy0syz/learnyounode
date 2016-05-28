var net = require('net')

// for(var i = 0 ; i < 3; i++){
// 	console.log(process.argv[2+i])
// }

var server = net.createServer(function(socket){
	var date = new Date();
	var myMonth = date.getMonth(1) + 1  // starts at 0
	if(myMonth<10) myMonth = '0'+ myMonth
	var myDate = date.getFullYear() + '-' +  myMonth + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()
	socket.end(myDate + '\n')
})

server.listen(process.argv[2])
server.on('error',(err)=>{
	console.error(err)
})

// var strftime = require('strftime')
// var net = require('net')

// var time = strftime.timezone('+0800')
// var server = net.createServer(function (socket){
//     socket.end(time('%Y-%m-%d %H:%M') + '\n')
// })
// server.listen(process.argv[2])