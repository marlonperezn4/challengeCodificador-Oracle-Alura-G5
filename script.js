/* Ocultar div del texto */
var divMostrarTexto = document.getElementById("divMostrarTexto");
divMostrarTexto.style.display = "none"

/* Función para ocultar imagen */

function ocultarCorrespondiente() {

    var oTexto = document.getElementById("oTexto").value;

    var divMostrarTexto = document.getElementById("divMostrarTexto");
    var divMostrarImagen = document.getElementById("divMostrarImagen");

    if (oTexto == "") {
        divMostrarTexto.style.display = "none";
        divMostrarImagen.style.display = "block";    
    } else {
        divMostrarImagen.style.display = "none";
        divMostrarTexto.style.display = "block";
    }
}

/* Función para encriptar */

function encriptarTexto() {
    let iTexto = document.getElementById("iTexto").value;
    /* Encriptar texto */
    let iTextoEncriptado = iTexto.replace(/e/g, 'enter');
    iTextoEncriptado = iTextoEncriptado.replace(/i/g, 'ime');
    iTextoEncriptado = iTextoEncriptado.replace(/a/g, 'ai');
    iTextoEncriptado = iTextoEncriptado.replace(/o/g, 'ober');
    iTextoEncriptado = iTextoEncriptado.replace(/u/g, 'ufat');

    document.getElementById("oTexto").innerHTML = iTextoEncriptado;
    ocultarCorrespondiente();
}

/* Función para desencriptar */

function desencriptarTexto() {
    let iTexto = document.getElementById("iTexto").value;
    /* desencriptar texto */
    let iTextoDesencriptado = iTexto.replace(/enter/g, 'e');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ime/g, 'i');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ai/g, 'a');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ober/g, 'o');
    iTextoDesencriptado = iTextoDesencriptado.replace(/ufat/g, 'u');

    document.getElementById("oTexto").innerHTML = iTextoDesencriptado;
    ocultarCorrespondiente();
}

/* Función para copiar */

function copiarTexto() {

    let copiarTexto = document.getElementById("oTexto");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); // celulares
  
    navigator.clipboard.writeText(copiarTexto.value);
  
    alert("Se ha copiado el texto: " + copiarTexto.value);
  }