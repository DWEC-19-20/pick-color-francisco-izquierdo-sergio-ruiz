function RGBtoHex(r,g,b) {
  var red = returnHex(r);
  var green = returnHex(g);
  var blue = returnHex(b);
  var hex = red + "" + green + "" + blue;
 
  return hex;
}

function returnHex(num) {
  if  ( num == null ) return "00";
  return (num < 16)? "0" + parseInt(num).toString(16) : parseInt(num).toString(16);;
}

function HexToRGB(num) {
    var r = parseInt(num.substr(0, 2),16);
    var g = parseInt(num.substr(2, 2),16);
    var b = parseInt(num.substr(4),16);
    console.log(num+" verde "+g);
    return r + " , " + g + " , " + b;
}