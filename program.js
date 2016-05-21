var sum1 = 0;

process.argv.forEach((val, index, array) => {
  //console.log(`${index}: ${val}`);
  if ((index >1)) {
  	sum1 = Number(sum1) + Number(val);
  };
  
});

console.log(sum1);

// var result = 0

//      for (var i = 2; i < process.argv.length; i++)
//        result += Number(process.argv[i])

//      console.log(result)