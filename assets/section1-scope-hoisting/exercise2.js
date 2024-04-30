//Ejercicio 2: Hoisting en Práctica

// (Añado elementos, caracteristicas o estilos por medio del DOM me generan MacroTareas)

const myText = document.getElementById('showCode');

myText.innerHTML = `// vars call<br>
console.log("Valor de a:", a);<br>
console.log("Valor de b:", b);<br>
console.log("Valor de c:", c);<br>

// functions call<br>
console.log("Resultado de funcionDeclarada:", funcionDeclarada());<br>
console.log("Resultado de funcionExpresada:", funcionExpresada());<br><br>

// vars declaration<br>
var a = 1;<br>
let b = 2;<br>
const c = 3;<br>

// functions declarations<br>
function funcionDeclarada() {<br>
  &emsp;return "Función declarada ha sido llamada.";<br>
}<br>
  &emsp;const funcionExpresada = function () {<br>
  &emsp;return "Función expresada ha sido llamada.";<br>
};`;

myText.style.height = '1000px';
myText.style.display = 'flex';
myText.style.alignItems = 'center';
myText.style.marginLeft = '100px';

// Variables

let anwersUser;
let whyUser;

//Function

function askYorN(question) {
  while (true) {
    anwer = prompt(question).trim().toLowerCase();

    if (anwer == 'y' || anwer == 'n') {
      break;
    }
    alert('Indica una opcion valida por favor');
  }

  return anwer;
}

setTimeout(() => {
  const question1 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, ¿Crees que la ejecucion para el primer console log console.log('Valor de a:', a); sera Exitoso y mostrara el valor de a?\nY: si\nN: no"
  );
  alert(
    'La respuesta es: NO\n\n-> Valor de a: undefined\n\nEsto se debe a que el Hoisting las variables VAR las lee, pero hasta no ser utilizadas despues de su declaracion (antes se encuentran en la temporal dead zone), momentaneamente toman el valor de UNDEFINED'
  );

  const question2 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, ¿Crees que la ejecucion para el segundo console log console.log('Valor de b:', b); sera Exitoso y mostrara el valor de b?\nY: si\nN: no"
  );
  alert(
    'La respuesta es: NO\n\n-> ERROR!\nReferenceError: Cannot access "b" before initialization\n\nEn el caso de las variables de ambito de bloque let el Hoisting no da ningun tipo de acceso a estas cuando estan en la temporal dead zone, solo podremos utilizar/acceder a estas despues de inicalizarlas'
  );

  const question3 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, ¿Crees que la ejecucion para el tercer console log console.log('Valor de c:', c); sera Exitoso y mostrara el valor de c?\nY: si\nN: no"
  );
  alert(
    'La respuesta es: NO\n\n-> ERROR!\nReferenceError: Cannot access "c" before initialization\n\nCon las variables de tipo de bloque const pasa igual que con las let el Hoisting no da ningun tipo de acceso a estas cuando estan en la temporal dead zone, solo podremos utilizar/acceder a estas despues de inicalizarlas'
  );

  const question4 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, ¿Crees que la ejecucion para la cuarta console log console.log('Resultado de funcionDeclarada:', funcionDeclarada()); sera Exitoso y mostrara la frase que debiese retornar la funcion declarada?\nY: si\nN: no"
  );
  alert(
    'La respuesta es: SI\n\n-> Resultado de funcionDeclarada: Función declarada ha sido llamada.\n\nA diferencia de las variables, una funcion declarada el Hoisting priotitariamente la toma y la deja arriba de todo precargada. Haciendo asi que se puedan utilizar/ejecutar sin importar donde esten declaradas'
  );

  const question5 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, ¿Crees que la ejecucion para el quinto console log console.log('Resultado de funcionExpresada:', funcionExpresada()); sera Exitoso y mostrara la frase que debiese retornar la funcion expresada?\nY: si\nN: no"
  );
  alert(
    'La respuesta es: NO\n\n-> ERROR!\nReferenceError: Cannot access "funcionExpresada" before initialization\n\nA diferencia de la funcion declarada el Hoisting con las funciones expresadas funciona igual que con las valiables de bloque. No se pueden utilizar/ejecutar antes de ser inicializadas, estas tambien cuentan con temporal dead zone'
  );
  // prompt();
}, 100);
