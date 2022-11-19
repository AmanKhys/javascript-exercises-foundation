string = 'hey';num = 1;
const repeatString = function(string,num ) {
  if(num<0) return 'ERROR';
  value = ''
  for(;num>0;num--) value += string;
  return value;
};

// Do not edit below this line
module.exports = repeatString;
