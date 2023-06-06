// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(){
    var texto = document.getElementById("mensaje").value.toLowerCase();

    var txtEncriptado = texto.replaceAll("e","enter"); 
    var txtEncriptado = txtEncriptado.replaceAll("i","imes");  
    var txtEncriptado = txtEncriptado.replaceAll("a","ai");   
    var txtEncriptado = txtEncriptado.replaceAll("o","ober");   
    var txtEncriptado = txtEncriptado.replaceAll("u","ufat");   

    // document.getElementById("imgDer").style.display = "none";
    // document.getElementById("textoEncriptado").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = txtEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "Inherit";
}

function desencriptar(){
    var texto = document.getElementById("mensaje").value.toLowerCase();

    var txtEncriptado = texto.replaceAll("enter","e"); 
    var txtEncriptado = txtEncriptado.replaceAll("imes","i"); 
    var txtEncriptado = txtEncriptado.replaceAll("ai","a");  
    var txtEncriptado = txtEncriptado.replaceAll("ober","o");
    var txtEncriptado = txtEncriptado.replaceAll("ufat","u");   

    // document.getElementById("imgDer").style.display = "none";
    // document.getElementById("textoEncriptado").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = txtEncriptado;
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "Inherit";
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    navigator.clipboard.writeText(contenido.value);
    alert("¡Se copió!");
}