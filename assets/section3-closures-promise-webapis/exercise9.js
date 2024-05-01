// Domina las Web APIs con Promesas y Fetch

let userTimer;

const urlData = 'https://jsonplaceholder.typicode.com/posts';

do {
  userTimer = prompt('Indica el tiempo en segundos para utilizar').trim();
} while (!/^[0-9]$/.test(userTimer));

userTimer = Number(userTimer);

new Promise((resolve, reject) => {
  setTimeout(() => {
    fetch(urlData)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, userTimer * 1000);
});
