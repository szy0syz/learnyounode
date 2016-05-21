var sum1 = 0;

process.argv.forEach((val, index, array) => {
  //console.log(`${index}: ${val}`);
  if ((index >1)) {
  	sum1 = Number(sum1) + Number(val);
  };
  
});

console.log(sum1);