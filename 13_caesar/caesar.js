const caesar = function(string, shiftKey) {
  let len = string.length;
  let shiftString = '';
  for(let i = 0; i<len; i++){
      shiftString += String.fromCharCode(string.charCodeAt(i)+shiftKey);
  }
  return shiftString;
};

// Do not edit below this line
module.exports = caesar;


