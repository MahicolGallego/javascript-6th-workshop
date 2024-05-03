// Aplicando Todos los Conceptos - Proyecto de Sistema de Reservas de Hotel

const url = "/assets/data-json/data.json";

const reservations = [
  {
    reservationId: 1,
    numberRoom: 104,
    startDate: "2024-04-01",
    endDate: "2024-04-07",
    nameClient: "mahicol gallego",
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
  const roomsAvailable = roomList.filter(
    (room) =>
      roomsTypes
        .filter((types) => types.capacity >= requiredCapacity)
        .map((selected) => selected.id)
        .includes(room.roomTypeId) && room.availability
  );

  return roomsAvailable;

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
function registerReservation(
  listReservations,
  requiredRoom,
  startDate,
  endDate,
  nameClient,
  quantityGuests
) {
  // { reservationId, numberRoom, startDate, endDate, nameClient, quantityGuests }

  const newReservation = Object.assign(
    {},
    {
      reservationId: myIdGenerator(),
      numberRoom: requiredRoom.number,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      toName: nameClient,
      quantityGuests,
    }
  );
  listReservations.push(newReservation);

  requiredRoom.availability = false;

  alert("Reservacion registrada con exito");
}

function showReservations(
  fullNameClient,
  listReservations,
  listRoomTypes,
  listRooms
) {
  const clientReservations = listReservations.filter(
    (element) => element.nameClient === fullNameClient
  );

  let message = "";

  clientReservations.forEach((element) => {
    //Buscando/extrayendo el tipo de habitacion
    const roomFind = listRooms.filter(
      (rooms) => rooms.number === element.numberRoom
    );

    const roomTypeFindDescription = listRoomTypes.find(
      (element) => element.id === roomFind[0].roomTypeId
    ).description;

    message += `\n${element.reservationId}. Numero de habitacion: ${element.numberRoom}\nTipo de habitacion: ${roomTypeFindDescription}\nFecha inicial de la reservacion: ${element.startDate}\nFecha final de la reservacion: ${element.endDate}\nCliente que reserva: ${element.nameClient}\nCantidad de huespedes: ${element.quantityGuests}\n`;
  });

  // console.log(message);

  return message;
}

//editar reservacion
function editReservation(listReservations, idReservationToEdit, newStartDate, newEndDate) {

  const ReservationToEdit = listReservations.find(element => element.reservationId === idReservationToEdit)

  if(newStartDate){
    ReservationToEdit.startDate = new Date(newStartDate)
  }

  if(newEndDate){
    ReservationToEdit.endDate = new Date(newEndDate)
  }  

  console.log(listReservations)

  return alert("Reserva modificada exitosamente");

}


//Cancelar reservacion
function cancelReservation(listReservations, listRooms, idReservationToCancel) {
  const cancelConfirm = confirm("¿Seguro que deseas cancelar la reservacion?");

  if (!cancelConfirm) {
    alert("Sin modificaciones para las reservas");
    return;
  }

  //Contenemos la reserva para luego poner de nuevo disponible la Room

  const reservationCanceled = listReservations.find(
    (element) => element.reservationId === idReservationToCancel
  );

  //Eliminar la reservacion

  listReservations.splice(idReservationToCancel - 1, 1);

  // console.log(listReservations)

  // Poner de nuevo disponible la Room

  const roomOfReservationCanceled = listRooms.find(
    (room) => room.number === reservationCanceled.numberRoom
  );

  roomOfReservationCanceled.availability = true;

  return alert("Reserva cancelada exitosamente");
}

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

//Variables

//General el contador
const myIdGenerator = idAutomaticGenerator();

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
            prompt(
              "Capacidad minima de huespedes que debe tener la habitacion"
            ).trim()
          );

          if (isNaN(userRequiredCapacity) || userRequiredCapacity === 0) {
            alert("Error: Capacidad indicada invalida");
            break;
          }

          const availableRooms = verifyAvailability(
            userRequiredCapacity,
            rooms,
            roomTypes
          );

          // console.log(availableRooms);

          if (!availableRooms.length) {
            alert(
              "No hay disponibilidad de habitaciones con esas caracteristicas"
            );
            break;
          }

          const numberRequiredRoom = Number(
            prompt(
              availableRooms
                .map((room) => {
                  return `Numero de habitacion: ${
                    room.number
                  }\nTipo de habitacion: ${
                    roomTypes.filter(
                      (roomType) => roomType.id === room.roomTypeId
                    )[0].name
                  }\nCapacidad Maxima: ${
                    roomTypes.find(
                      (roomType) => roomType.id === room.roomTypeId
                    ).capacity
                  }`;
                })
                .join("\n\n") +
                "\n\nIngrese el numero de la habitacion que desea reservar: "
            )
          );

          if (
            !availableRooms
              .map((element) => element.number)
              .includes(numberRequiredRoom)
          ) {
            if (numberRequiredRoom === 0) {
              alert("No se indico dato para la solicitud");
              break;
            }
            alert(
              "la habitacion solicitadas no existe o no se encuentra entre las habitaciones disponibles"
            );
            break;
          }

          //Tomo el cuarto que desea el cliente
          const roomToReservation = rooms.find(
            (element) => element.number === numberRequiredRoom
          );

          // console.log(roomToReservation);

          let startDate;

          do {
            startDate = prompt(
              "Por favor ingresa la fecha inicio de la reserva (MM/DD/YYYY): "
            );
          } while (
            !startDate ||
            startDate.split("/").length !== 3 ||
            !/^[0-9/]{10}$/.test(startDate) ||
            startDate.split("/")[0].length !== 2 ||
            startDate.split("/")[1].length !== 2 ||
            startDate.split("/")[2].length !== 4
          );

          let endDate;

          do {
            endDate = prompt(
              "Por favor ingresa la fecha final de la reserva (MM/DD/YYYY): "
            );
          } while (
            !endDate ||
            endDate.split("/").length !== 3 ||
            !/^[0-9/]{10}$/.test(endDate) ||
            endDate.split("/")[0].length !== 2 ||
            endDate.split("/")[1].length !== 2 ||
            endDate.split("/")[2].length !== 4
          );

          let fullNameClient;

          while (true) {
            fullNameClient = prompt(
              "Ingresa el nombre y apellido a nombre de quien se creara la reserva por favor"
            )
              .toLowerCase()
              .trim();

            if (
              fullNameClient.split(" ").length === 2 &&
              fullNameClient.split(" ")[1].length &&
              !/[0-9]/.test(fullNameClient)
            ) {
              break;
            }

            alert(
              "El nombre y el apellido deben separarse por espacio y sin numeros por favor"
            );
          }

          let quantityGuests;
          while (true) {
            quantityGuests = Number(
              prompt(
                "Indica el numero de las personas que se hospedaran en la habitacion"
              ).trim()
            );
            if (quantityGuests) {
              break;
            }
            alert("No se ha indicado ningun dato o ningun dato valido");
          }

          if (
            !roomTypes
              .filter((type) => type.capacity >= userRequiredCapacity)
              .map((element) => element.id)
              .includes(roomToReservation.roomTypeId)
          ) {
            alert(
              "El cuarto seleccionado no tiene esa capacidad de huespedes\nIntenta probar con otra seleccion"
            );
            break;
          }
          registerReservation(
            reservations,
            roomToReservation,
            startDate,
            endDate,
            fullNameClient,
            quantityGuests
          );

          console.log(rooms, reservations);

          break;
        case "2":
          let fullNameToSearch;
          while (true) {
            fullNameToSearch = prompt(
              "Ingresa el nombre y apellido de a nombre de a quien se encuentran registradas las reservas que quieres consultar"
            )
              .toLowerCase()
              .trim();

            if (
              fullNameToSearch.split(" ").length === 2 &&
              fullNameToSearch.split(" ")[1].length &&
              !/[0-9]/.test(fullNameToSearch)
            ) {
              break;
            }

            alert(
              "El nombre y el apellido deben separarse por espacio y sin numeros por favor"
            );
          }
          let userReservations = showReservations(
            fullNameToSearch,
            reservations,
            roomTypes,
            rooms
          );

          if (!userReservations) {
            alert("No hay reservas registradas para ese cliente");
            break;
          }

          alert(
            "Lista de reservas: " + fullNameToSearch + "\n" + userReservations
          );
          break;
        case "3":
          let fullNameToSearchEdit;
          while (true) {
            fullNameToSearchEdit = prompt(
              "Ingresa el nombre y apellido de a nombre de a quien se encuentran registradas las reservas que deseas modificar"
            )
              .toLowerCase()
              .trim();

            if (
              fullNameToSearchEdit.split(" ").length === 2 &&
              fullNameToSearchEdit.split(" ")[1].length &&
              !/'[0-9]'/  .test(fullNameToSearchEdit)
            ) {
              break;
            }

            alert(
              "El nombre y el apellido deben separarse por espacio y sin numeros por favor"
            );
          }

          let userReservationsEdit = showReservations(
            fullNameToSearchEdit,
            reservations,
            roomTypes,
            rooms
          );

          if (!userReservationsEdit) {
            alert("No hay reservas registradas para ese cliente");
            break;
          }

          const IdToEditReservation = Number(
            prompt(
                `${userReservationsEdit}\n\nIndica el numero en la id de reserva de la reserva que deseas cancelar: `
            ).trim()
          );

          if(!reservations.filter(element => element.reservationId === IdToEditReservation && element.nameClient === fullNameToSearchEdit)[0]){
            alert(
              "La reservacion que intenta editar no existe en el registro"
            );
            break;
          }

          let startDateToEdit;

          do {
            startDateToEdit = prompt(
              "Por favor ingresa la nueva fecha inicio para modificar la reserva (MM/DD/YYYY)\n(Si no desea modificarla presione enter)"
            );
          } while (
            (!startDateToEdit ||
            startDateToEdit.split("/").length !== 3 ||
            !/^[0-9/]{10}$/.test(startDateToEdit) ||
            startDateToEdit.split("/")[0].length !== 2 ||
            startDateToEdit.split("/")[1].length !== 2 ||
            startDateToEdit.split("/")[2].length !== 4) && startDateToEdit !== ""
          );

          let endDateToEdit;

          do {
            endDateToEdit = prompt(
              "Por favor ingresa la nueva fecha final para modificar la reserva (MM/DD/YYYY)\n(Si no desea modificarla presione enter)"
            );
          } while (
            (!endDateToEdit ||
            endDateToEdit.split("/").length !== 3 ||
            !/^[0-9/]{10}$/.test(endDateToEdit) ||
            endDateToEdit.split("/")[0].length !== 2 ||
            endDateToEdit.split("/")[1].length !== 2 ||
            endDateToEdit.split("/")[2].length !== 4) && endDateToEdit !== ""
          );

          editReservation(reservations, IdToEditReservation, startDateToEdit, endDateToEdit);
          
          break;
        case "4":
          let fullNameToSearchCancel;
          while (true) {
            fullNameToSearchCancel = prompt(
              "Ingresa el nombre y apellido de a nombre de a quien se encuentran registradas las reservas que deseas cancelar"
            )
              .toLowerCase()
              .trim();

            if (
              fullNameToSearchCancel.split(" ").length === 2 &&
              fullNameToSearchCancel.split(" ")[1].length &&
              !/'[0-9]'/  .test(fullNameToSearchCancel)
            ) {
              break;
            }

            alert(
              "El nombre y el apellido deben separarse por espacio y sin numeros por favor"
            );
          }

          
          let userReservationsCancel = showReservations(
            fullNameToSearchCancel,
            reservations,
            roomTypes,
            rooms
          );

          if (!userReservationsCancel) {
            alert("No hay reservas registradas para ese cliente");
            break;
          }

          const IdToCancelReservation = Number(
            prompt(
                `${userReservationsCancel}\n\nIndica el numero en la id de reserva de la reserva que deseas cancelar: `
            ).trim()
          );

          if (
            !reservations.filter(
              (reservation) =>
                reservation.reservationId === IdToCancelReservation &&
                reservation.nameClient === fullNameToSearchCancel
            ).length
          ) {
            alert(
              "La reservacion que intenta cancelar no existe en el registro"
            );
            break;
          }

          cancelReservation(reservations, rooms, IdToCancelReservation);

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
