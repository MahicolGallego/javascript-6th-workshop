//Ejercicio 10: Visualización del Event Loop

/*
¿Qué tareas se consideran macrotareas y cuáles son microtareas?

R/: Para el event loop, las promesas son microtareas, y tareas asincronas como
el setTimeout son consideradas macrotareas

¿Cómo se relacionan las macrotareas y microtareas con el event loop?

R/: Estos interactuan por prioridad de ejecucion, donde primero ingresan al callstack directamente 
las tareas normales y se ejecutan, luego la prioridad de ejecucion las tendran las microtareas
y en ultima instancia las macrotareas cuando tanto como el callstack como las microtareas se
hallen sin pendientes

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?

las PROMESAS se manejan como MICROTAREAS, que no tienen ejecucion inmediata, sino detras
de todas las tareas "normales", en primera instancia se encolan, y luego pasan a resolverse.
estas nos pueden devolver y encolar microtareas nuevas o tambien pueden encolar macrotares
dependiendo de lo que ejecute su contenido. No obstante, si nos encolan otra tarea mas, no
se ejecutaran de una vez sino que deberan esperar minimo(dependiendo de que otra tarea encole)
a que las microtareas previamente encoladas se ejecuten. Personalmente yo lo veo como cargar 
todas las microtareas y ir iterando en ellas tomando de a una ejecucion por vez.
por ejemplo:
Iteracion 1 | promise 1 -> pendiente 1 | promise 2 -> pendiente 1 | promise 3 -> pendiente 1
Iteracion 3 | promise 1 -> pendiente 2 | promise 2 -> pendiente 2 | promise 3 -> pendiente 2
Asi, sucesicamente, lo que indica que si una microtarea, tiene diferentes .then | acciones | pendientes
no se ejecutaran todos en una sola vez si existen mas promesas pendientes.

En el caso de los SETTIMEOUT sucede que estos tienen la ultima prioridad de ejecucion ya que
se tratan como MACROTAREAS, por los cual deberan esperan a que tanto el callstack como la 
pila de microtareas esten vacias, es solo hasta ese momento en que se empezaran a ejecutar 
las macrotareas, y su comportamiento en ejecucion es igual al de las micro, pueden devolver o
encolar otras tareas, con la diferencia de que si encolan una micro, esta no esperara a que 
se ejecuten las demas Macrotareas que continuaban en la pila, sino que como tienen mas
prioridad, esta micro se ejecturaria justamente despues de la macro que la encolo, si fuese
otra macro la que encolase, estas si deben esperar a que se ejecuten las pendientes y resueltas
o con menor tiempo de solucion/ejecucion antes que ella.                                      

-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------


Considera el siguiente código:
console.log("Inicio del script");

****Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

****Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

****Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

---------------------------------------------------------------------
---------------------------------------------------------------------

*****Tratando de deducir el orden en el que ejecutaria el event loop 
antes de realizar ir al jsv9000.app

console.log("Inicio del script");

console.log("Fin del script");

  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })

  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

  setTimeout(() => {
    console.log("Macrotarea 0 seconds (setTimeout)");
  }, 0);

  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })

  setTimeout(() => {
    console.log("Macrotarea 1 second (setTimeout)");
  }, 1000);
*/
