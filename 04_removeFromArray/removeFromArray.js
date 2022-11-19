const removeFromArray = function(arr,subArr) {
  for(let i=0;i<arr.length-1;i++) if(arr[i]==subArr) arr.splice(i,1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
