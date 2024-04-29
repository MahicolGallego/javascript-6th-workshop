// Añadir elemntos, caracteristicas o estilos por medio del DOM me generan MacroTareas

const myText = document.getElementById("showCode");

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

myText.style.height = "1000px";
myText.style.display = "flex";
myText.style.alignItems = "center";
myText.style.marginLeft = "100px";

// Variables

let anwersUser;
let whyUser;

//Function

function askYorN(question) {
  while (true) {
    anwer = prompt(question).trim().toLowerCase();

    if (anwer == "y" || anwer == "n") {
      break;
    }
    alert("Indica una opcion valida por favor");
  }

  return anwer;
}

setTimeout(() => {
  const question1 = askYorN(
    "Teniendo de encuenta el codigo enseñado, segun el Hoisting en Javascript, Crees que la ejecucion para el primer console log console.log('Valor de a:', a); sera Exitoso\nY: si\nN: no"
  );
  alert();
  // prompt();
}, 100);
