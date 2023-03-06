// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){

    var x = Object.entries(objeto);
    return x;
     
  
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

      string = string.toLowerCase()
      resultado = {}

      for (char of string)
      resultado[char] = (resultado[char] ?? 0) + 1

      return resultado;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

    let arr = [];
    for (let i in s) {
      if (s[i] === s[i].toUpperCase()) {
        arr.push(s[i]);
      }
    }
    for (let i in s) {
      if (s[i] !== s[i].toUpperCase()) {
        arr.push(s[i]);
      }
    }
    return arr.toString().replace(/,/g, '');
  }
  



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var x = str.split("").reverse().join("");
  var y = x.split(" ").reverse().join(" ");
    return y;
}    
  



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

    var x = numero;
    var y = x.toString();
    var z = y.split("").reverse().join("");
    if (x-z==0){
        return "Es capicua";
    } else return "No es capicua";

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

      var x = cadena;
      var y = x.replace(/a|b|c/g, "");
      return y;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
         
     var x = arr;
     var y = x.sort((a,b) => a.length -b.length);
     return y;


}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array3 = arreglo1.concat(arreglo2);
  var array4 = array3.filter((item,
          index) => array3.indexOf(item) !== index);
  return array4;

  
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

