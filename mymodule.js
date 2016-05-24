module.exports = function(dir,filter,callback){
  var fs = require("fs")
  var path = require("path")

  var ext = '.' + filter

  fs.readdir(dir,function(err,lists){
    if(err) 
      return callback(err)

    return callback(null, lists.filter(function(file) {
            return file.slice(-ext.length) == ext;
    //callback(null,lists)
  }))})

}

