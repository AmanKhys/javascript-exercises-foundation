const add = function(num1, num2) {
  return num1 + num2;

	
};

const subtract = function(num1, num2) {
  return num1 - num2;

	
};

const sum = function(arr) {
  let total = 0;
  for(let i=0;i<arr.length;i++){
   total+=arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let product = 1;
  for(let i = 0;i<arr.length;i++)
  product *=arr[i];
  return product;
};

const power = function(num,power) {
  let exp = 0;
  exp = num**power;
	return exp;
};
let fact = 1;
const factorial = function(num) {
  if(num ==0) return 1;
  return fact =num * factorial(num-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
