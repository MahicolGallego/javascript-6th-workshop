//Ejercicio 5: Promesas y Callbacks en Acción

const myPromise = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("¡Promesa cumplida y callback ejecutado!"),2000)
    setTimeout(() => reject("Error promesa rechazada...callback ejecutado!"),2000)
})

function manejarAsincronia(promise, callback){
    promise
   .then(result => callback(result))
   .catch(error => callback(error))
}

manejarAsincronia(myPromise, function (result){
    console.log(result);
})

/*
¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?

En la consola arrojara el error "Uncaught (in promise)" de que no hemos capturado
el fallo, esto pasara si no usamos el ambito .catch{} 

¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?

Si cambiamos el tiempo para la resolucion de la promesa no afecta en nada al orden de ejecucion
de las instrucciones, simplemente el callback se sigue ejecutando siempre luego de la promise

¿Puedes modificar la función para que el callback maneje diferentes tipos de información 
dependiendo del resultado de la promesa?

Si, para ello ademas del apartado .then{} que se ejecuta para la solucion correcta(Resolve) de la
promesa, debemo incluir tambien el .catch{} que se ejecuta para la solucion errada(Reject) y alli
tambien le indicamos que ejecute el callback

*/