const caesar = function(string, shiftKey) {
  let len = string.length;
  let shiftString = '';
  for(let i = 0; i<len; i++){
    let code = string.charCodeAt(i);
    let sChar = (code, shiftKey) => String.fromCharCode(code+shiftKey);
    let char = (i) => string.charAt(i);
    if((code>=65 && code <=122)){
      //for letters overflowing right side
      if((code + shiftKey > 90 && code <=90) || (code +shiftKey >122)){
        let diff = 0;
        if(code <=90){
          diff = code + shiftKey - 90; code = 64;}
        else if(code >=97){
          diff = code + shiftKey - 122; code = 96;}
        shiftString += sChar(code, diff);
      }
      //for letters overflowing left side 
      else if((code + shiftKey <65) || (code +shiftKey <96 && code >=96)){
        let diff = 0;
        if(code <=90){
          diff = code + shiftKey - 90; code = 90;}
        else if(code >=96){
          diff = code + shiftKey - 122; code = 120;}
        shiftString += sChar(code, diff);
      }
      //for letters in normal
      else shiftString += sChar(code,shiftKey);
    }
    else shiftString += char(i);
    }
  return shiftString;
};

// Do not edit below this line
module.exports = caesar;
