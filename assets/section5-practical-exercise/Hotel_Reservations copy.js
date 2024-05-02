// Aplicando Todos los Conceptos - Proyecto de Sistema de Reservas de Hotel

const url = "/assets/data-json/data.json";

const reservations = [
  {
    reservationId: 1,
    numberRoom: 104,
    startDate: "2024-04-01",
    endDate: "2024-04-07",
    nameClient: "Mahicol Gallego",
    quantityGuests: 3,
  },
];

// { reservationId, numberRoom, startDate, endDate, nameClient, quantityGuests }

// funciones

//closure id

function idAutomaticGenerator(intervalIncrease = 1) {
  let id = 0;
  return () => {
    id += intervalIncrease;
  };
}

//verificar disponibilidad
function verifyAvailability(requiredCapacity, roomList, roomsTypes) {
  alert("Verifiquemos la disponibilidad habitaciones");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const roomsAvailable = roomList.filter(
        (room) =>
          roomsTypes
            .filter((types) => types.capacity >= requiredCapacity)
            .map((selected) => selected.id)
            .includes(room.roomTypeId) && room.availability
      );
      if (!roomsAvailable.length) {
        reject(
          "No hay disponibilidad de habitaciones con esas caracteristicas"
        );
      }
      console.log("Habitaciones disponibles: ", roomsAvailable);
      resolve(roomsAvailable);
    }, 3000);
  });
  // .then((listRoomsAvailables) => {
  //   console.log("Habitaciones disponibles: ", listRoomsAvailables);
  //   resolve(roomsAvailable);
  // })
  // .catch((err) => {
  //   console.error(err);
  //   reject(err);
  // });

  /*Por si no hay una propiedad availability(disponibilidad)
  let roomsAvailable = roomList.filter(
    (room) =>
      roomsTypes
        .filter((types) => types.capacity >= requiredCapacity)
        .map((selected) => selected.id)
        .includes(room.roomTypeId) &&
      !reservationList
        .map((reserve) => reserve.numberRoom)
        .includes(room.number)
    idea: crear filtro donde para la capacidad sea >= a la requerida
    luego le sacamos lista de solo los id con .map y verificamos con
    .includes si el id de tipo de la room coinciden y tambien hacemos
    un punto map de las habitaciones reservadas a los numeros de
    habitacion y de nuevo con .includes verificamos si la
    habitacion ya se encuentra reservada.
    */
}

//crear Reservacion
function registerReservation() { }

//Variables

//General el contador
const myIdGenerator = idAutomaticGenerator();

// Función para cargar y mostrar el contenido de data.json
function loadAndShowData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Error: Algo ha ido mal al cargar los datos");
            // Si la respuesta no es correcta, rechazamos la promesa
          }
          //si es correcta se retorna la data parseada en formato .json
          return response.json();
        })
        .then((data) => {
          //mostramos la data en consola
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de habitaciones", data.roomTypes);
          //Resolver la promesa con los datos cargados
          resolve(data);
        })
        .catch((err) => {
          // Si hay un error, rechazamos la promesa con el error
          console.error(err);
          reject(err);
        });
    }, 2000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
const runProgram = loadAndShowData();

runProgram
  .then(({ rooms, roomTypes }) => {
    mainProgram: while (true) {
      let selectOpt;
      while (true) {
        selectOpt = prompt(
          "Bienvenido al Hotel Kali\n\n" +
          "Seleccione una opcion:\n\n" +
          "1. Reservar habitacion\n" +
          "2. Ver reservas actuales\n" +
          "3. Editar reserva\n" +
          "4. Cancelar reserva\n" +
          "5. Salir"
        );
        if (["1", "2", "3", "4", "5"].includes(selectOpt)) {
          break;
        }
        alert("Indica una opcion valida");
      }
      switch (selectOpt) {
        case "1": //Aplicamos destructuracion a los datos y mostramos su contenido
          //despues de cargarlos

          const userRequiredCapacity = Number(
            prompt("Capacidad de huespedes que debe tener la habitacion").trim()
          );

          if (isNaN(userRequiredCapacity) || userRequiredCapacity === 0) {
            alert("Error: Capacidad indicada invalida");
            break;
          }

          const roomsAvailables = verifyAvailability(
            userRequiredCapacity,
            rooms,
            roomTypes,
            reservations
          );

          roomsAvailables
            .then(availableRooms => {
              const userAction = Number(
                prompt(
                  availableRooms
                    .map((room) => {
                      return `Numero de habitacion: ${room.number
                        }\nTipo de habitacion: ${roomTypes.filter(
                          (roomType) => roomType.id === room.roomTypeId
                        )[0].name
                        }\nCapacidad Maxima: ${roomTypes.find(
                          (roomType) => roomType.id === room.roomTypeId
                        ).capacity
                        }`;
                    })
                    .join("\n\n") +
                  "\n\nIngrese el numero de habitacion que desea reservar: "
                )
              );
            })
            .catch((err) => {
              console.error(err);
              alert(err);
            });

          // const userAction = Number(
          //   prompt(
          //     rooms
          //       .map((room) => {
          //         return `Numero de habitacion: ${room.number
          //           }\nTipo de habitacion: ${roomTypes.filter(
          //             (roomType) => roomType.id === room.roomTypeId
          //           )[0].name

          //           /*
          //           Profe lo hizo la search con find(un poco mas eficiente)
          //           roomTypes.find((type) => type.id === room.type).name
          //           */
          //           }\nCapacidad Maxima: ${roomTypes.find(
          //             (roomType) => roomType.id === room.roomTypeId
          //           ).capacity
          //           }`;
          //       })
          //       .join("\n\n") +
          //     "\n\nIngrese el numero de habitacion que desea reservar: "
          //   )
          // );

          // console.log(reservations);
          break;
        case "2":
          break;
        case "3":
          break;
        case "4":
          break;
        case "5":
          break mainProgram;
        default:
          break;
      }
    }
  })
  .catch((err) => {
    console.error("Error en la obtencion de los datos: ", err);
  });
