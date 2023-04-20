/* Ocultar div del texto */
const divMostrarTexto = document.querySelector(".mostrar-texto");
const divMostrarImagen = document.querySelector(".mostrar-imagen");

const oTexto = document.getElementById("oTexto");

divMostrarTexto.style.visibility = "collapse";

/* Función para ocultar imagen */

function ocultarCorrespondiente() {

    let Texto = document.getElementById("oTexto").value;

    if (Texto == "") {
        divMostrarTexto.style.visibility = "collapse";
        divMostrarImagen.style.visibility = "visible";
    } else {
        if(/[A-ZÁÉÍÓÚáéíóú]/.test(Texto)) {
            alert("El texto contiene mayúsculas o acentos.");
            return; // interrumpe la ejecución de la función
          }
          divMostrarImagen.style.visibility = "collapse";
          divMostrarTexto.style.visibility = "visible";
          oTexto.scrollIntoView();
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