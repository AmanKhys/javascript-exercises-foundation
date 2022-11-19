let string = 'hello'
const reverseString = function(string) {
  let revString = '';
  for(let i=string.length -1;i>=0;i--) revString +=string.substring(i,i+1);
  return revString;
  }

// Do not edit below this line
module.exports = reverseString;
