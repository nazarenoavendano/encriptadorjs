function validarTexto(texto) {
  let mayusculas = /[A-Z]/g;
  let sintexto = "";
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if (texto.match(caracteres) || texto.match(mayusculas)) {
    let inputTextArea = document.getElementById("input-texto");
    inputTextArea.value = "Ingrese solo letras minusculas y sin acentos.";
    setTimeout(function () {
      inputTextArea.value = "";
    }, 3000); //RESETEAMOS LUEGO DE 3 SEGUNDOS DE MOSTRAR EL MENSAJE
    return true;
  } else if (texto == sintexto) {
    let inputTextArea = document.getElementById("input-texto");
    inputTextArea.value = "El campo está vacio, favor de ingresar un texto.";
    setTimeout(function () {
      inputTextArea.value = "";
    }, 3000); // SI EL TEXTO ESTA VACIO, LE MOSTRAMOS MSJ Y RESET
    return true;
  } else {
    return false;
  }
}






