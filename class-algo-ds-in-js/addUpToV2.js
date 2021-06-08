function addUpTo(n) {
  return n * (n+1)/2;
}

const start = process.hrtime();
console.log(addUpTo(100000));
const duration = process.hrtime(start);
console.log(`Total duration: ${duration[0]}s ${duration[1]/100000}ms`);

