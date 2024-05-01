// Domina las Web APIs con Promesas y Fetch

let userTimer;

const urlData = "https://jsonplaceholder.typicode.com/posts";

do {
  userTimer = prompt("Indica el tiempo en segundos para utilizar").trim();
} while (!/^[0-9]$/.test(userTimer));

userTimer = Number(userTimer);

new Promise((resolve, reject) => {
  //setTimeout para simular la respuesta asincrona
  setTimeout(() => {
    //fetch: solicitamos los datos a la API
    //genera una promise pendiente
    fetch(urlData)
      //.then: esperamos la respuesta de la solicitud y return a la promise
      //positiva o negativa segun sea el caso
      .then((response) => {
        //Una vez tenemos respuesta consultamos si fue exitosa y todo ok si
        //no hemos tenido acceso a la data
        if (!response.ok) {
          //Verificamos si todo ha ido bien con la propiedad ok, lo que significa
          //un status 200, Esto porque fetch no dispara errores directamente sino
          //codigos a no ser que al usuario no tenga conexion, pierda la señal,
          //el servidor no respondeo o la URL simplemento no existes.

          //si no esta todo ok enviamos un error para disparar el .catch
          throw new Error("failed to fetch. Error al cargar datos");
        }
        //si esta tofo ok return con la data convertidos a .json
        return response.json();
      })
      //Mostramos el resutados segun corresponda
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, userTimer * 1000);
});
