const removeFromArray = function() {
  let arr = arguments[0];
  len = arguments.length -1;
  for(let j=1;j<len;j++)
    for(let i=0;i<arr.length-1;i++) 
      if(arr[i]==arguments[j]) arr.splice(i,1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
