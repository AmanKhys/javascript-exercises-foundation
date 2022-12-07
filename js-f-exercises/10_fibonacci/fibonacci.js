const fibonacci = function(number) {
  number = Number(number);
  if(number <0) return "OOPS";
  else if(number === 1) return 1;
  let previous = 0, current = 1, temp = 0,nextFibNumber;
  for(let i = 0;i<number - 1;i++){
    nextFibNumber = previous + current;
    temp = current;
    current += previous;
    previous = temp;
  }
  return nextFibNumber;
};

// Do not edit below this line
module.exports = fibonacci;


// n, prev = 0 , current = 1;
//n 1, fib = prev + current; 
//  