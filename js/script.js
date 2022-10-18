/*
e = enter
i = imes
a = ai
o = ober
u = ufat
*/
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que aplique tanto a mayusculas como minusculas
    //g es para toda la linea u oración
    //m es para que afecte a multiples lineas o parrafo
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("texto_1").style.display = "none";
    document.getElementById("texto_2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que aplique tanto a mayusculas como minusculas
    //g es para toda la linea u oración
    //m es para que afecte a multiples lineas o parrafo
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("texto_1").style.display = "none";
    document.getElementById("texto_2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copy(){
    var contenido = document.querySelector("#texto_2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió!");
}