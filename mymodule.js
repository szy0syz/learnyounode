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

function bar(callback){
  foo(function(err,data){
    if (err) {
      return callback(err)
    }

    callback(null,data)

  })
}


module.exports = function(dir,filter,errCallback){ 

  var fs = require("fs")
  var path = require("path")

  var folder = process.argv[2]
  var ext = '.' + process.argv[3]

  bar()

  fs.readdir(folder,function(err,lists){
    if(err) 
      return errCallback(err)

    lists.forEach(function(value,index){
      if(path.extname(value) === ext)
        console.log(value)
    })
  })
}


  // function bar (callback){
  //  foo(function (err,data){
  //    if(err)
  //      return callback(err) //early retrurn

  //    callback(null,data)
  //  })
  // }