// Añadir elemntos, caracteristicas o estilos por medio del DOM me generan MacroTareas

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
    anwer = prompt(`Indica por que crees esto por favor`).trim();

    if (anwer) {
      break;
    }
    alert('indica algo por favor');
  }

  return anwer;
}

setTimeout(() => {
  prompt('hola');
  prompt('hola');
  prompt('hola');
  prompt('hola');
}, 1000);
