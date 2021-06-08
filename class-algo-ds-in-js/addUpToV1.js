function addUpTo(n) {
  let total = 0;
 for (var i = 1; i <= n; i++) {
   total += i; 
 } 
  return total; 
}

const start = process.hrtime();
console.log(addUpTo(100000));
const duration = process.hrtime(start);
console.log(`Total duration: ${duration[0]}s ${duration[1]/100000}ms`);

