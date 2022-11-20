const removeFromArray = function(arr,...Args) {


  for(let i = 0;i<Args.length ;i++){
    for(let j = 0; j<arr.length  ; j++){
      if(arr[j]==Args[i]) arr.splice(j,1);
    }
  }
  return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
