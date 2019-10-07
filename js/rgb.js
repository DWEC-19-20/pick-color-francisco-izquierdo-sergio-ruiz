const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b"); 

// Mostrar conversión
document.getElementById("enviar").addEventListener("click",function(e){
   
    var valorHex = rgb(r.value,g.value,b.value);
    document.getElementById("hex").value = valorHex;
  
    var RGB = hex(valorHex);
    document.getElementById("RGB").value = RGB;
    
    document.getElementById('color').style.background = valorHex;
    
});

// Borrar datos
document.getElementById("borrar").addEventListener("click",function(e){
    r.value = "";
    g.value = "";
    b.value = "";
    document.getElementById("hex").value = "";
    document.getElementById("RGB").value = "";
    document.getElementById("color").style.background='#FFFFFF';
});

