//Ejercicio 4: Funciones Declaradas vs Expresadas

console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log('Error:', error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log('Error:', error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return 'Función declarada ha sido llamada.';
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return 'Función expresada ha sido llamada.';
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* 

¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

La funcion declarada se ejecuto sin inconvenientes mientras que la expresada genero un error
lo que hizo que entrar al catch inmediatamente e indico que habia sido llamada antes de su declaracion

¿Cómo difieren los resultados entre la función declarada y la función expresada?

Cuando las intentamos llamar antes de su declaracion la funcion declarada genero sin problemas los
resultados esperados al contrario de la declarada que arrojo un error

¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

Las funciones declaradas estaran disponibles para su ejecucion/utilizacion duranto todo el programa.
en cuanto a las expresadas solo se podran utilizar luego de ser instanciadas o inicializadas, de resto 
se encontraran en la Temporal Dead Zone 

*/
