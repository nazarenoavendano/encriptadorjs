function validaciondelTexto(texto) {
  let mayusculas = /[A-Z]/g;
  let sintexto = "";
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if (texto.match(caracteres) || texto.match(mayusculas)) {
    let inputTextArea = document.getElementById("input-texto");
    inputTextArea.value = "Ingrese solo letras minusculas y sin acentos.";
    setTimeout(function () {
      inputTextArea.value = "";
    }, 3000); //RESETEAMOS LUEGO DE 3 SEGUNDOS DE MOSTRAR EL MENSAJE
    return "No pasa la validación.";
  } else if (texto == sintexto) {
    let inputTextArea = document.getElementById("input-texto");
    inputTextArea.value = "El campo está vacio, favor de ingresar un texto.";
    setTimeout(function () {
      inputTextArea.value = "";
    }, 3000); // SI EL TEXTO ESTA VACIO, LE MOSTRAMOS MSJ Y RESET
    return "No pasa la validación.";
  } else {
    return "Pasó la validación."; //SI ESTA TODO OK MANDA UN FALSE
  }
}

// // AGREGO FUNCION AL CLIC DEL BOTON ENCRIPTAR

// let encriptador = document.getElementById("btn-encriptar")

// encriptador.addEventListener("click", function () {
//   let textoIngresado = document.getElementById("input-texto");
//   let texto = textoIngresado.value;

//   if (validarTexto)

// } )
