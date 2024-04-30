//Ejercicio 6: Event Loop y Web APIs

console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos")},0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 0 segundos")},1000);



/*
¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente 
después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?

Lo que sucede es que a pesar de tener 0 segundos de retraso al ser un setTimeout
ya se considera macro, y este se ejecuta luego de todas las tareas en cola que 
tienen mayor prioridad como por ejemplo los console.log, microtareas...

¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, 
y la forma en que JavaScript maneja las operaciones asíncronas?

*/