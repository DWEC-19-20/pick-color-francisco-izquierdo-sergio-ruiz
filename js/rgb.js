const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b"); 
const inColor = document.getElementById('inColor');

// Mostrar conversión
document.getElementById("enviar").addEventListener("click",function(e){
   
    var valorHex = rgb(r.value,g.value,b.value);
    document.getElementById("hex").value = valorHex;
  
    var RGB = hex(valorHex);
    document.getElementById("RGB").value = RGB;
    
    inColor.value = valorHex;
    
});

// Borrar datos
document.getElementById("borrar").addEventListener("click",function(e){
    r.value = "";
    g.value = "";
    b.value = "";
    document.getElementById("hex").value = "";
    document.getElementById("RGB").value = "";
    inColor.value = '#FFFFFF';
});

document.getElementById("enviar2").addEventListener("click",function(e){
    
    var valorHex = document.getElementById("hex").value;
  
    var RGB = hex(valorHex);
    document.getElementById("RGB").value = RGB;
    
    r.value = parseInt(RGB.substr(0,3));
    g.value = parseInt(RGB.substr(3,3));
    b.value = parseInt(RGB.substr(6));
    
    inColor.value = "#"+valorHex;
    
});