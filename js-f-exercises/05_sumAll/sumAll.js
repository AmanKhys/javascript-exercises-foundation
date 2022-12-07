const sumAll = function(number1, number2) {
  if(number1 <0 || number2 <0 ||
    typeof number1 !=typeof 2 ||
    typeof number2 !=typeof 2 ) return 'ERROR';
  let tempNumber, sum = 0;
  if(number1> number2){
    tempNumber = number1;number1=number2;number2=tempNumber;}
  for(;number1<=number2;number1++) sum += number1;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
