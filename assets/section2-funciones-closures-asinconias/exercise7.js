// Considera el siguiente script:

const myText = document.getElementById('showCode');

myText.innerHTML = `*console.log('Inicio del script');<br>

*setTimeout(() => {<br>
  &emsp;console.log('Primer setTimeout');<br>
}, 0);<br>

*setTimeout(() => {<br>
  &emsp;console.log('Segundo setTimeout');<br>
}, 0);<br>

*Promise.resolve('Promesa resuelta').then(console.log);<br>

*console.log('Fin del script');`;

myText.style.height = '1000px';
myText.style.display = 'flex';
myText.style.alignItems = 'center';
myText.style.marginLeft = '100px';

// Code

console.log('Inicio del script');

setTimeout(() => {
  console.log('Primer setTimeout');
}, 0);

setTimeout(() => {
  console.log('Segundo setTimeout');
}, 0);

Promise.resolve('Promesa resuelta').then(console.log);

console.log('Fin del script');

// ------

// functions

function askWithVerify(question) {
  let anwer;
  while (true) {
    anwer = prompt(question).trim().toLowerCase();

    if (['1', '2', '3', '4', '5'].includes(anwer)) {
      break;
    }
    alert('Indica una opcion valida por favor');
  }

  return anwer;
}

function giveFeedback(
  answerUser,
  answerUserTwo,
  answerUserThree,
  answerUserFour,
  answerUserFive
) {
  if (answerUser === '1') {
    alert(`Respuesta 1: ${answerUser}\nCorrecta\nFelicitaciones!`);
  } else {
    alert(
      `Respuesta 1: ${answerUser}\nincorrecta\n\nEste primer console log se ejecutaria de primeras ya que es el primero en el programa y estos entran al Call Stack directamente y se ejecutan`
    );
  }
  if (answerUserTwo === '4') {
    alert(`Respuesta 2: ${answerUserTwo}\nCorrecta\nFelicitaciones!`);
  } else {
    alert(
      `Respuesta 2: ${answerUserTwo}\nIncorrecta\n\nEste primer setTimeout se ejecutaria de cuarto ya que genera una macro tarea y tendria que esperar a que el call stack este vacio(los console log en este caso) y que las microtareas(la promise en este caso) tambien ya se hayan ejecutado para poderse ejecutar las macro, sera la cuarta ejecucion`
    );
  }

  if (answerUserThree === '5') {
    alert(`Respuesta 3: ${answerUserThree}\nCorrecta\nFelicitaciones!`);
  } else {
    alert(
      `Respuesta 3: ${answerUserThree}\nIncorrecta\n\nEste segundo setTimeout se ejecutaria de quinto ya que genera una macro tarea y tendria que esperar a que el call stack este vacio(los console log en este caso) y que las microtareas(la promise en este caso) tambien ya se hayan ejecutado para poderse ejecutar las macro y como hay una macro regsitrada antes que el, esta sera la ultima en la ejecucion`
    );
  }

  if (answerUserFour === '3') {
    alert(`Respuesta 4: ${answerUserFour}\nCorrecta\nFelicitaciones!`);
  } else {
    alert(
      `Respuesta 4: ${answerUserFour}\nIncorrecta\n\nPara en cuanto a la promise estas se toman como micro tarea, tienen mas prioridad que las macro tareas asi que irian antes, pero despues de que se ejecuten todas las tareas en el call stack. se ejecutaria en la posicion 3`
    );
  }

  if (answerUserFive === '2') {
    alert(`Respuesta 5: ${answerUserFive}\nCorrecta\nFelicitaciones!`);
  } else {
    alert(
      `Respuesta 5: ${answerUserFive}\nIncorrecta\n\nEste ultima linea console log se ejecutaria de segundas ya que en el programa estos entran al Call Stack directamente y se ejecutan, pero antes hay un console log, luego de este, este ultimo console log seria la segunda ejecucion`
    );
  }
}

//Questions

setTimeout(() => {
  const answer = askWithVerify(
    "Test Event loop\n\nTeniendo en cuenta el codigo enseñado.\nEn que posicion se ejecutara el primer console log\n\nconsole.log('Inicio del script');\n\n-> 1\n-> 2\n-> 3\n-> 4\n-> 5"
  );

  const answerTwo = askWithVerify(
    "Test Event loop\n\nTeniendo en cuenta el codigo enseñado.\nEn que posicion se ejecutara el primer setTimeout \n\nsetTimeout(() => {console.log('Primer setTimeout');}, 0);\n\n-> 1\n-> 2\n-> 3\n-> 4\n-> 5"
  );

  const answerThree = askWithVerify(
    "Test Event loop\n\nTeniendo en cuenta el codigo enseñado.\nEn que posicion se ejecutara el segundo setTimeout \n\nsetTimeout(() => {console.log('Segundo setTimeout');}, 0);\n\n-> 1\n-> 2\n-> 3\n-> 4\n-> 5"
  );

  const answerFour = askWithVerify(
    "Test Event loop\n\nTeniendo en cuenta el codigo enseñado.\nEn que posicion se ejecutara la promesa \n\nPromise.resolve('Promesa resuelta').then(console.log);\n\n-> 1\n-> 2\n-> 3\n-> 4\n-> 5"
  );

  const answerFive = askWithVerify(
    "Test Event loop\n\nTeniendo en cuenta el codigo enseñado.\nEn que posicion se ejecutara el console log del final \n\nconsole.log('Fin del script');\n\n-> 1\n-> 2\n-> 3\n-> 4\n-> 5"
  );

  giveFeedback(answer, answerTwo, answerThree, answerFour, answerFive);
}, 100);
