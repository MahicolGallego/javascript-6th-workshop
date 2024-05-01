//Magia con Closures

const myCounter = (() => {
  let counter = 0;
  function increase() {
    counter++;
  }
  function getCounter() {
    return counter;
  }
  return { increase, getCounter };
})();

while (true) {
  let userAction;
  do {
    userAction = prompt(
      'Interactua con el contador\n\n1 -> Incrementar contador\n2 ->Salir'
    );
  } while (!['1', '2'].includes(userAction));

  if (userAction === '2') {
    alert(
      `Valor final del contador: ${myCounter.getCounter()}\n\nGracias por utilizar el programa.\nQue tengas un buen dia`
    );
    break;
  }

  myCounter.increase();
  alert(`Se incremento el contador\n\nContador = ${myCounter.getCounter()}`);
}
