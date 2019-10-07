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

