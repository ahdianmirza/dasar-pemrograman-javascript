const user = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 19,
    isJedi: true,
    "home world": 'Tattooine',
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

// Contoh lain object
const spaceship = {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1200,
    color: 'Light gray'
};

spaceship.color = 'Glossy Red';
spaceship["maxSpeed"] = 1300;
spaceship.class = 'Light Freighter';

console.log(spaceship);

// Menghapus properti pada object
delete spaceship.manufacturer;
console.log(spaceship)