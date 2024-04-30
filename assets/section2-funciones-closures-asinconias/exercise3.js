//Ejercicio 3: Closures en Acción
function crearSumador(num) {
  console.log(num);
  function sumador(num2) {
    num += num2;
    console.log(num);
  }
  return sumador;
}

const sumarCinco = crearSumador(5);
sumarCinco(3);
sumarCinco(5);
sumarCinco(20);

const sumartres = crearSumador(3);
sumartres(2);

/*
¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
NOTA: LOS CLOSURES SI CREAMOS UNA INSTANCIA DE UN CLOSURE, ESTA QUEDA CON EL ACCESO A LA FUNCION COMO SU PROPIO ENTORNO CERRADO QUE FUNCIONARA CON LOS VALORES INICIALES QUE TENGA/SE LE DEN AL MOMENTO DE HACERLO. Este cierre permite que la función interna acceda a esa variable incluso después de que la función externa haya terminado de ejecutarse. El cierre(closure) mantiene una referencia a la variable en su ámbito externo, lo que le permite retener ese valor incluso cuando la función externa ha finalizado

¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
Uso de memoria adicional: Cada cierre contiene una referencia al entorno léxico en el que fue creado, lo que incluye las variables externas capturadas por la función, osea que se debe asignar memoria adicional para almacenar ese entorno léxico

Retención de memoria: Los cierres pueden retener memoria incluso después de que la función externa que los creó haya finalizado su ejecución. Esto puede llevar a situaciones de retención de memoria (memory leaks) especialmente en aplicaciones de largo plazo o en entornos

Impacto en el recolector de basura: pueden hacer que los objetos capturados por ellos permanezcan en memoria más tiempo de lo esperado, lo que puede dificultar la determinación de cuándo liberar esos objetos de memoria.


*/
