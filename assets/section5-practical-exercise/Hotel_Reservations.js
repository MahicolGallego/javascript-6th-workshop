// Aplicando Todos los Conceptos - Proyecto de Sistema de Reservas de Hotel

const url = '/assets/data-json/data.json';

const reservations = [
  {
    reservationId: 1,
    numberRoom: 104,
    startDate: '2024-04-01',
    endDate: '2024-04-07',
    nameClient: 'Mahicol Gallego',
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
  alert('Verifiquemos la disponibilidad habitaciones');
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

  alert('Reservacion registrada con exito');
}

function showReservations(fullNameClient, listReservations, listRoomTypes) {
  const clientReservations = listReservations.filter(
    (element) => element.toName === fullNameClient
  );
  const message = clientReservations.map((element) => {
    return `\n${element.reservationId}. Numero de habitacion: ${
      element.numberRoom
    }\nTipo de habitacion: ${listRoomTypes.find(
      (element) => element.numberRoom === reservations
    )}\nFecha inicial de la reservacion: ${
      element.startDate
    }\nFecha final de la reservacion: ${
      element.endDate
    }\nCliente que reserva: ${element.nameClient}\nCantidad de huespedes: ${
      element.quantityGuests
    }\n`;
  });
}

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
            throw new Error('Error: Algo ha ido mal al cargar los datos');
            // Si la respuesta no es correcta, rechazamos la promesa
          }
          //si es correcta se retorna la data parseada en formato .json
          return response.json();
        })
        .then((data) => {
          //mostramos la data en consola
          console.log('Habitaciones:', data.rooms);
          console.log('Tipos de habitaciones', data.roomTypes);
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
          'Bienvenido al Hotel Kali\n\n' +
            'Seleccione una opcion:\n\n' +
            '1. Reservar habitacion\n' +
            '2. Ver reservas actuales\n' +
            '3. Editar reserva\n' +
            '4. Cancelar reserva\n' +
            '5. Salir'
        );
        if (['1', '2', '3', '4', '5'].includes(selectOpt)) {
          break;
        }
        alert('Indica una opcion valida');
      }
      switch (selectOpt) {
        case '1': //Aplicamos destructuracion a los datos y mostramos su contenido
          //despues de cargarlos

          const userRequiredCapacity = Number(
            prompt(
              'Capacidad minima de huespedes que debe tener la habitacion'
            ).trim()
          );

          if (isNaN(userRequiredCapacity) || userRequiredCapacity === 0) {
            alert('Error: Capacidad indicada invalida');
            break;
          }

          const availableRooms = verifyAvailability(
            userRequiredCapacity,
            rooms,
            roomTypes,
            reservations
          );

          // console.log(availableRooms);

          if (!availableRooms.length) {
            alert(
              'No hay disponibilidad de habitaciones con esas caracteristicas'
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
                .join('\n\n') +
                '\n\nIngrese el numero de la habitacion que desea reservar: '
            )
          );

          if (
            !availableRooms
              .map((element) => element.number)
              .includes(numberRequiredRoom)
          ) {
            if (numberRequiredRoom === 0) {
              alert('No se indico dato para la solicitud');
              break;
            }
            alert(
              'la habitacion solicitadas no existe o no se encuentra entre las habitaciones disponibles'
            );
            break;
          }

          //Tomo el cuarto que desea el cliente
          const roomToReservation = rooms.find(
            (element) => element.number === numberRequiredRoom
          );

          console.log(roomToReservation);

          let startDate;

          do {
            startDate = prompt(
              'Por favor ingresa la fecha inicio de la reserva (MM/DD/YYYY): '
            );
          } while (
            !startDate ||
            startDate.split('/').length !== 3 ||
            !/^[0-9/]{10}$/.test(startDate) ||
            startDate.split('/')[0].length !== 2 ||
            startDate.split('/')[1].length !== 2 ||
            startDate.split('/')[2].length !== 4
          );

          let endDate;

          do {
            endDate = prompt(
              'Por favor ingresa la fecha final de la reserva (MM/DD/YYYY): '
            );
          } while (
            !endDate ||
            endDate.split('/').length !== 3 ||
            !/^[0-9/]{10}$/.test(endDate) ||
            endDate.split('/')[0].length !== 2 ||
            endDate.split('/')[1].length !== 2 ||
            endDate.split('/')[2].length !== 4
          );

          let fullNameClient;

          while (true) {
            fullNameClient = prompt(
              'Ingresa el nombre y apellido a nombre de quien se creara la reserva por favor'
            )
              .toLowerCase()
              .trim();

            if (
              fullNameClient.split(' ').length === 2 &&
              fullNameClient.split(' ')[1].length &&
              !/[0-9]/.test(fullNameClient)
            ) {
              break;
            }

            alert(
              'El nombre y el apellido deben separarse por espacio y sin numeros por favor'
            );
          }

          let quantityGuests;
          while (true) {
            quantityGuests = Number(
              prompt(
                'Indica el numero de las personas que se hospedaran en la habitacion'
              ).trim()
            );
            if (quantityGuests) {
              break;
            }
            alert('No se ha indicado ningun dato o ningun dato valido');
          }

          if (
            !roomTypes
              .filter((type) => type.capacity >= userRequiredCapacity)
              .map((element) => element.id)
              .includes(roomToReservation.roomTypeId)
          ) {
            alert(
              'El cuarto seleccionado no tiene esa capacidad de huespedes\nIntenta probar con otra seleccion'
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
        case '2':
          let showReservations =
            `Lista de reservaciones\n` +
            reservations.map((element) => {
              return `\n${element.reservationId}. Numero de habitacion: ${element.numberRoom}\nFecha inicial de la reservacion: ${element.startDate}\nFecha final de la reservacion: ${element.endDate}\nCliente que reserva: ${element.nameClient}\nCantidad de huespedes: ${element.quantityGuests}\n`;
            });
          alert(showReservations);
          // { reservationId, numberRoom, startDate, endDate, nameClient, quantityGuests }
          break;
        case '3':
          break;
        case '4':
          break;
        case '5':
          break mainProgram;
        default:
          break;
      }
    }
  })
  .catch((err) => {
    console.error('Error en la obtencion de los datos: ', err);
  });
