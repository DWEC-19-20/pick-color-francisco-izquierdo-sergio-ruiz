// Convertir valor RGB a HEX
function rgb(r,g,b) {
    var red, 
        green, 
        blue,
        hex;
    
    red  = returnHex(r);
    green = returnHex(g);
    blue = returnHex(b);
    hex = red + "" + green + "" + blue;
    
    return "#" + hex.toUpperCase();
}

// Transformar valores a hexadecimal
function returnHex(num) {
   
    var hex;
    
    if(num > 255) num = 255;
    
    else if(num < 0) num = 0;
    
    hex = (num < 16)? "0" + parseInt(num).toString(16) : parseInt(num).toString(16);
    
    return hex;
    
}

// Convertir valor HEX a RGB
function hex(num) {
    
    var r, g, b;
    //Comprobar que el numero HEX tenga el formato necesario
    
    if(num.charAt(0) == "#") num = num.substr(1);
    if(num.length > 6) num = num.substr(2);
    
    
    r = formato(parseInt(num.substr(0, 2),16));
    g = formato(parseInt(num.substr(2, 2),16));
    b = formato(parseInt(num.substr(4, 2),16));
    
    return r + "" + g + "" + b;
    
}

// Dar formato a los valores RGB
function formato(num){
    
    if(num < 10) num = "00" + num;    
    else if(num < 100) num = "0" + num;
    if(num == 0) num = "000";
    
    return num;
    
}

// Cambiar valores al usar el Color input
function cambio(valorHex){
    valorHex = inColor.value;
    var RGB = hex(valorHex);
    
    r.value=parseInt(valorHex.substr(1,2),16);
    g.value=parseInt(valorHex.substr(3,2),16);
    b.value=parseInt(valorHex.substr(5,2),16);
    document.getElementById("hex").value = valorHex.toUpperCase();
    document.getElementById("RGB").value = RGB;
}