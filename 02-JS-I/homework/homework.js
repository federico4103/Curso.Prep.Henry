// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hello";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4103;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var name = str;
  return name
  
}

function suma(x, y) {
  var resultado = x + y;
  return resultado;
  
}

function resta(x, y) {
  var subtraction = x - y;
  return subtraction; 
  
}

function multiplica(x, y) {
  var producto = x*y;
  return producto;
  
}

function divide(x, y) {
  var coeficiente = x/y;
  return coeficiente;
  
}

function sonIguales(x, y) {
  if ( x == y){
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length){
    return true;
  }
  else if (str1.length !== str2.length){
    return false;
  }
}
  


function menosQueNoventa(num) {
  if (num < 90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50){
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  var resto = x%y
  return resto   
}

function esPar(num) {
  if (num%2 == 0){
    return true;
    }
  return false

}
  


function esImpar(num) {
  if (num%2 == 0){
    return false;
  }
  return true

}
  


function elevarAlCuadrado(num) {
  var resultado = Math.pow(num,2);
  return resultado;

}

function elevarAlCubo(num) {
  var resultado = Math.pow(num,3);
  return resultado;
  
}

function elevar(num, exponent) {
  var resultado = Math.pow(num,exponent);
  return resultado  
}

function redondearNumero(num) {
  return Math.round(num);
  
}

function redondearHaciaArriba(num) {
 return Math.ceil(num);
}




function numeroRandom() {
  return Math.random();
 
}

function esPositivo(numero) {
  var numero = Math.sign(numero);
  if (numero == 1){
    return "Es positivo";
  }
  else if (numero == 0){
    return false;
  }
  else if (numero == -1){
    return "Es negativo";
  }

}
  


function agregarSimboloExclamacion(str) {
  return str + "!";

}

function combinarNombres(nombre, apellido) {
  return nombre +" " + apellido
  
}

function obtenerSaludo(nombre) {
  return "Hola " + nombre + "!"
  
}


function obtenerAreaRectangulo(alto, ancho) {
  var area = alto*ancho;
  return area;
  
}


function retornarPerimetro(lado){
  var perimetro = lado*4;
  return perimetro;

}


function areaDelTriangulo(base, altura){
  var area = base*altura*0.5;
  return area;

}


function deEuroAdolar(euro){
    return euro*1.2;
  
}


function esVocal(letra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ){
      return "Es vocal";
      }
      else return "Dato incorrecto";
    
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
