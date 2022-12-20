// USAMOS KEY OBJ VALUES PARA SEPARAR CLAVE VALOR DE UN ARRAY CON LAS REGLAS

const CODIGOARRAY = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// ENCRIPTAR Y DESENCRIPTAR:

function encriptar(txt) {
  let msjEncriptado = "";
  let vocales = Object.values(CODIGOARRAY);
  let palabras = Object.keys(CODIGOARRAY);

  for (let i = 0; i < vocales.length; i++) {
    msjEncriptado = txt.replaceAll(palabras[i], vocales[i]);
    txt = msjEncriptado;
  }
  return msjEncriptado;
};

function desencriptar(txt) {
  let msjEncriptado = "";
  let vocales = Object.values(CODIGOARRAY);
  let palabras = Object.keys(CODIGOARRAY);

  for (let i = 0; i < vocales.length; i++) {
    msjEncriptado = txt.replaceAll(vocales[i], palabras[i]);
    txt = msjEncriptado;
  }
  return msjEncriptado;
};

// VALIDACIÓN DEL TEXTO:

function validarTxt(txt) {
  // agrego regex:
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  // si está vacío:
  let nada = "";
  // mensajes de error:
  let msjVacio = "El campo está vacio, favor de ingresar un texto.";
  let msjCaracter =
    "Ingrese solo letras evitando el uso de tildes u otros caracteres especiales.";
  // donde vamos a mostrar los mensajes de error:
  let campoTxt = document.getElementById("input-texto").value;

  if (txt.match(caracteres)) {
    campoTxt = msjCaracter;

    setTimeout(function () {
      campoTxt = "";
    }, 3000);

    return true;
  } else if (txt == nada) {
    campoTxt = msjVacio;

    setTimeout(function () {
      campoTxt = "";
    }, 3000);

    return true;
  } else {
    // SI NO HAY PROBLEMAS RETORNA FALSO
    return false;
  }
};

// MANEJO DE LOS BOTONES:
var textAreaInput = document.getElementById("input-texto");
var textAreaResultado = document.getElementById("textoEncriptado");

  // BOTON ENCRIPTAR:
let botonEncriptador = document.getElementById("btn-encriptar");

botonEncriptador.addEventListener ("click", function() {
  let txtIngresado = textAreaInput.value;

  (validarTxt(txtIngresado) == false) ?
  textAreaResultado.value = encriptar(txtIngresado) :
  textAreaResultado.value = ""

});

  // BOTON DESENCRIPTAR:
let botonDesencriptador = document.getElementById("btn-desencriptar");











