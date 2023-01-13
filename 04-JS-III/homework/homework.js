// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]

}


function devolverUltimoElemento(array) {
  return array[array.length - 1]

}


function obtenerLargoDelArray(array) {
      return array.length

}


function incrementarPorUno(array) {
    var array = array;
    var arraynew = array.map((i) => i + 1);
    return arraynew;

}


function agregarItemAlFinalDelArray(array, elemento) {
      
  var array = array
  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento){

     var array = array
     array.unshift(elemento);
      return array;
}


function dePalabrasAFrase(palabras) {

   var array = palabras 
   return array.join(" ");

}


function arrayContiene(array, elemento) {
  var array = array
  return array.includes(elemento);

}



function agregarNumeros(numeros) {
   var array = numeros;
   return array.reduce((a, b)=>a + b);

}


function promedioResultadosTest(resultadosTest) {
   var array = resultadosTest;
   var arraynew = array.reduce((a,b) => (a + b));
   var arrayprom = (arraynew / (array.length));
   return arrayprom;

}


function numeroMasGrande(numeros) {
   var array = numeros;
   return Math.max(...array);

}


function multiplicarArgumentos() {
   if (arguments.length == 0) {
     return 0
   }
   var  product = 1;
   
   for (var i = 0; i < arguments.length; i++) {
       product = product * arguments[i];
   }
   return product;
}


function cuentoElementos(arreglo){
    var arreglo = arreglo;
    var arreglo2 = arreglo.filter((i) => i > 18);
    return arreglo2.length;

}


function diaDeLaSemana(numeroDeDia) {
     var array = [1,2,3,4,5,6,7];
     if (numeroDeDia == array[0] || numeroDeDia == array[6]){
        return "Es fin de semana";
     }
     else return "Es dia Laboral";

}


function empiezaConNueve(n) {
    var num = n;
    var nums = num.toString();
    var array = [nums];
      if (array[0][0] == 9){
       return true;
      } 
    else return false;

}


function todosIguales(arreglo){
   var first = arreglo[0];
   for (let i = 1; i < arreglo.length; i++){
     if (first !== arreglo[i]){
        return false;
    }
  }
  return true;

}


function mesesDelAño(array) {
  var array = array;
  if (array.includes("Marzo" && "Noviembre" && "Enero")){
      return ["Marzo", "Noviembre", "Enero"];
  }
  else return "No se encontraron los meses pedidos";

}


function mayorACien(array) {
  var array = array;
  return array.filter((i) => i > 100)

}


function breakStatement(numero) {
  var array = [];
  for (var i = numero+2; i<= numero+20; i=i+2){
    array.push(i);

  if (i == array[i]){
   
   return "Se interrumpió la ejecución";
 }
 }
 return array;
 
}


function continueStatement(numero) {
   var array = [];
   for (let i = numero + 2; i < numero+20; i=i+2) {
      array.push(i);
   }
   return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
