document.getElementById("enviar").addEventListener("click",function(e){
   var r = document.getElementById("r").value;
   var g = document.getElementById("g").value;    
   var b = document.getElementById("b").value;    
   
   var valorHex = RGBtoHex(r,g,b);
    
   document.getElementById("hex").value = "#" + valorHex;
    var RGB = HexToRGB(valorHex);
    document.getElementById("RGB").value = RGB;

});

