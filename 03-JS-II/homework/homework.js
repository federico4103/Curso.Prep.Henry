// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
    if (x > y) {
      return x;
    }
    else if ( y > x){
      return y;
    }
    else if ( x == y){
      return x;
    }
 }


function mayoriaDeEdad(edad) {
  if ( edad > 17){
    return "Allowed";
  }
  else if ( edad < 18){
    return "Not allowed";
  }
}
  
function conection(status) {
   if (status == 1){
      return "Online";
   }
   else if (status == 2){
      return "Away";
   }
  else return "Offline";

 }

function saludo(idioma) {
  if (idioma == "aleman"){
    return "Guten Tag!";
  }
  else if (idioma == "mandarin"){
     return "Ni Hao!";
  }
  else if (idioma == "ingles"){
     return "Hello!";
  }
  else return "Hola!";

}

function colors(color) {
  switch (color){
    case "blue":
    return "This is blue";
    break;
    case "red": 
    return "This is red";
    break;
    case "green":
    return  "This is green";
    break;
    case "orange": 
    return "This is orange";
    default: 
    return "Color not found";
  }
}

function esDiezOCinco(numero) {
  if (numero == 10 || numero == 5){
    return true;
  }
 else return false;

}

function estaEnRango(numero) {
  if (numero < 50 & numero > 20){
     return true
  }
  else return false;

}

function esEntero(numero) {
  if (Math.ceil(numero) == Math.floor(numero)){
    return true;
  }
  else if (Math.ceil(numero) !== Math.floor(numero)){
    return false;
  }
}

function fizzBuzz(numero) {
  if (numero%15 == 0){
    return "fizzbuzz";
  }
  else if (numero%5 == 0){
    return "buzz";
  }
  else if (numero%3 == 0){
    return "fizz";
  }
  else if (numero%3 !== 0 || numero%5 !== 0){
    return numero;
  }

}


function operadoresLogicos(num1, num2, num3) {
  if (num1 == 0 || num2 == 0 || num3 == 0){
    return "Error";
  }  
  else if (num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos";
  }
  else if (num3 > num2 && num3 > num1){
    return num3+1;
  }
  else if (num1 > num2 & num1 > num3 & num1 > 0){
    return "Número 1 es mayor y positivo";
  }
  else return false;
} 

function esPrimo(numero) {
  if (numero == 0 || numero == 1 || numero == 4){
     return false;
  }
  for (let x = 2; x<numero/2; x++){
      if (numero % x == 0){
      return false
      }
  }
  return true;
}

function esVerdadero(valor){
  if (valor == true){
    return "Soy verdadero";
  }
  else if (valor == false){
    return  "Soy falso";
  }
}

function tablaDelSeis(){
  var array = [0,6,12,18,24,30,36,42,48,54,60];
  return array
} 

function tieneTresDigitos(numero){
   if (numero.toString().length == 3){
      return true;
   }
   return false;
}

function doWhile(numero) {
  let i = numero;

  do {
  i = i + 40;
  } while (i < numero);
  return i
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
