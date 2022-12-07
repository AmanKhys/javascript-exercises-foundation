const ctof = function(cel) {
 let far = cel*(9/5) + 32;
 let rounded = far.toFixed(1);
 return Number(rounded);

};

const ftoc = function(far) {
  let cel = (far - 32) * (5/9);
  let rounded = cel.toFixed(1);
  return Number(rounded);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
