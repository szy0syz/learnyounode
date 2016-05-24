// exports.bar = function(callback){
//   callback()
// }

// exports.handler = function(dir,filter,errCallback){
  
//   var fs = require("fs")
//   var path = require("path")

//   var folder = process.argv[2]
//   var ext = '.' + process.argv[3] 

//   fs.readdir(folder,function(err,lists){
//     if(err) 
//       return errCallback(err)

//     lists.forEach(function(value,index){
//       if(path.extname(value) === ext)
//         console.log(value)
//     })

//   })

// }

var foo = function(){

}

var bar = function(dir,filter,errCallback){

  var fs = require("fs")
  var path = require("path")

  var folder = process.argv[2]
  var ext = '.' + process.argv[3]
  fs.readdir(folder,function(err,lists){
    if(err) 
      return errCallback(err)

    lists.forEach(function(value,index){
      if(path.extname(value) === ext)
        console.log(value)
    })
  })

	// foo(function (err,data){
 //     if(err)
 //       return callback(err) //early retrurn

 //     callback(null,data)
 //   })
}


module.exports = { 
	foo:foo,
	bar:bar
  
}

// module.exports = function(dir,filter,errCallback){ 
// }

// module.exports = function(dir,filter,errCallback){ 

//   var fs = require("fs")
//   var path = require("path")

//   var folder = process.argv[2]
//   var ext = '.' + process.argv[3]


//   fs.readdir(folder,function(err,lists){
//     if(err) 
//       return errCallback(err)

//     lists.forEach(function(value,index){
//       if(path.extname(value) === ext)
//         console.log(value)
//     })
//   })

// }


  // function bar (callback){
  //  foo(function (err,data){
  //    if(err)
  //      return callback(err) //early retrurn

  //    callback(null,data)
  //  })
  // }