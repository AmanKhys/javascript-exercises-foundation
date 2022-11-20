const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let len = string.length;
  let reverseString = '';
  for(let i = len - 1; i>=0;i--){
    reverseString += string.substring(i,i+1);
  }
  return reverseString===string;
};

// Do not edit below this line
module.exports = palindromes;
