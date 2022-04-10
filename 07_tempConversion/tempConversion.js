const ftoc = function(tempf) {
  tempc = ((tempf - 32) * (5/9))
  return Number(tempc.toFixed(1))
};

const ctof = function(tempc) {
  tempf = ((tempc * (9/5)) + 32)
  return Number(tempf.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
