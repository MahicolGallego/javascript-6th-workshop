let anwersUser;
let whyUser;

while (true) {
  anwersUser =
    prompt(`Scope y Hoisting\n\nConsiderando el siguiente codigo: \n\nvar globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n\n¿Sera posible disponer o acceder a la variable "var globalVariable" absolutamente en cualquier parte del script?\nY: si\nN: no`).toLowerCase();

  if (anwersUser === 'y' || anwersUser === 'n') {
    break;
  }
  alert('indica una opcion correcta');
}

while (true) {
  whyUser = prompt(`Indica por que crees esto por favor`).trim();

  if (whyUser) {
    break;
  }
  alert('indica algo por favor');
}

alert(
  `Respuesta correcta: Si\n\nTu respuesta: ${
    anwersUser === 'y' ? 'Si -> Correcto' : 'No -> Incorrecto'
  }\n\nTu justificacion:\n${whyUser}\n\nExplicacion:\nPara este caso la variable esta en el scope global. Una variable está en el scope global cuando está declarada fuera de una función o de un bloque de codigo. También son conocidas como variables globales y se puede acceder a este tipo de variables desde cualquier parte de tu código, ya sea dentro o fuera de una función. Ademas, el tipo de variable var cuenta con un scope global por defecto, sin embargo estas deben de ser inicializadas o declaradas antes de cuando se utilizan para poder ser leidas por el script`
);

//---------------------------------------------------------

while (true) {
  anwersUser =
    prompt(`Scope y Hoisting\n\nConsiderando el siguiente codigo: \n\nvar globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n\n¿Sera posible disponer o acceder a la variable "var functionVariable" fuera de la declaracion de la funcion y/o sin ejecutar la funcion?\nY: si\nN: no`).toLowerCase();

  if (anwersUser === 'y' || anwersUser === 'n') {
    break;
  }
  alert('indica una opcion correcta');
}

while (true) {
  whyUser = prompt(`Indica por que crees esto por favor`).trim();

  if (whyUser) {
    break;
  }
  alert('indica algo por favor');
}

alert(
  `Respuesta correcta: No\n\nTu respuesta: ${
    anwersUser === 'y' ? 'Si -> Incorrecto' : 'No -> Correcto'
  }\n\nTu justificacion:\n${whyUser}\n\nExplicacion:\nPara este caso la variable esta en el scope global, pero de la funcion, las funciones cuenta con su propio scope el cual funciona como un scope local del cual solo pueden disponer dichas funciones y y todo lo realizado, declarado o implementado dentro de ellas. Una variable está en el scope de funcion cuando está declarada dentro de una función`
);

//----------------------------------------------

while (true) {
  anwersUser =
    prompt(`Scope y Hoisting\n\nConsiderando el siguiente codigo: \n\nvar globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n\n¿Sera posible disponer o acceder a la variable "var functionVariable" dentro del bloque condicional if{} que le prosigue en la funcion?\nY: si\nN: no`).toLowerCase();

  if (anwersUser === 'y' || anwersUser === 'n') {
    break;
  }
  alert('indica una opcion correcta');
}

while (true) {
  whyUser = prompt(`Indica por que crees esto por favor`).trim();

  if (whyUser) {
    break;
  }
  alert('indica algo por favor');
}

alert(
  `Respuesta correcta: Si\n\nTu respuesta: ${
    anwersUser === 'y' ? 'Si -> Correcto' : 'No -> incorrecto'
  }\n\nTu justificacion:\n${whyUser}\n\nExplicacion:\nPara este caso la variable si es posible ya que esta esta dentro del scope global de la funcion, es decir, se puede disponer de esta en cualquier momento luego de su declaracion`
);

//----------------------------------------------

while (true) {
  anwersUser =
    prompt(`Scope y Hoisting\n\nConsiderando el siguiente codigo: \n\nvar globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();\n\n¿Sera posible dentro de la funcion disponer o acceder a la variable "let blockVariable" fuera del bloque condicional if{} en lo que prosiguiese en la funcion?\nY: si\nN: no`).toLowerCase();

  if (anwersUser === 'y' || anwersUser === 'n') {
    break;
  }
  alert('indica una opcion correcta');
}

while (true) {
  whyUser = prompt(`Indica por que crees esto por favor`).trim();

  if (whyUser) {
    break;
  }
  alert('indica algo por favor');
}

alert(
  `Respuesta correcta: No\n\nTu respuesta: ${
    anwersUser === 'y' ? 'Si -> Incorrecto' : 'No -> Correcto'
  }\n\nTu justificacion:\n${whyUser}\n\nExplicacion:\nEn este caso, no es posible ya que las variables tipo let y const tienen la caracteristica de scope de bloque, es decir que solo podran ser accedida o implementadas dentro de estas estructuras de bloque {}, y las anidadas de estas que vengan despues, si las hay, pero no por niveles anteriores de anidacion al bloque al que pertenezca. Estos tipos de variable tambien pueden tomar el scope global, pero solo si en el script no se declaran/inicializan dentro de ninguna funcion o bloque de codigo {}`
);
