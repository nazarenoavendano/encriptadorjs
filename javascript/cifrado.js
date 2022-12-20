// USAMOS KEY OBJ VALUES PARA SEPARAR CLAVE VALOR DE UN ARRAY CON LAS REGLAS

const CODIGOARRAY = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encriptar(txt) {
  let msjEncriptado = "";
  let vocales = Object.values(CODIGOARRAY);
  let palabras = Object.keys(CODIGOARRAY);

  for (let i = 0; i < vocales.length; i++) {
    msjEncriptado = txt.replaceAll(palabras[i], vocales[i]);
    txt = msjEncriptado;
  }
  return msjEncriptado;
}

function desencriptar(txt) {
  let msjEncriptado = "";
  let vocales = Object.values(CODIGOARRAY);
  let palabras = Object.keys(CODIGOARRAY);

  for (let i = 0; i < vocales.length; i++) {
    msjEncriptado = txt.replaceAll(vocales[i], palabras[i]);
    txt = msjEncriptado;
  }
  return msjEncriptado;
}
