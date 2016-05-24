// module.exports = function(dir,filter,callback){
//   var fs = require("fs")
//   var path = require("path")

//   var ext = '.' + filter

//   fs.readdir(dir,function(err,lists){
//     if(err) 
//       return callback(err)

//     return callback(null, lists.filter(function(file) {
//             return path.extname(file) === ext;
//   }))})
// }

var fs = require('fs')
var path = require('path')

module.exports = function(dir,filter,callback){
  fs.readdir(dir,function(err,list){
    if(err) 
      return callback(err)

    list = list.filter(function(file){
      return path.extname(file) === '.' + filter
    })

    callback(null,list)

  })
}