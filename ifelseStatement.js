const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log('Hari ini hujan. Bawa payung.');
}

console.log('Berangkat kegiatan');

console.log('\n');
// ==================================================================================================

let x = 50;

if (x > 70) {
    console.log(x);
} else {
    console.log('Nilai kurang dari 70');
}

console.log('\n');
// ==================================================================================================

let language = 'French';
let greeting = 'Selamat Pagi';

if (language === 'English') {
    greeting = 'Good Morning';
} else if (language === 'French') {
    greeting = 'Bonjour';
} else if (language === 'Japanese') {
    greeting = 'Ohayou Gozaimasu';
}

console.log(greeting);

console.log('\n');
// ==================================================================================================

// ternary operator
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

console.log('\n');
// ==================================================================================================

// truthy & falsy
let name = '';

if (name) {
    console.log(`Hallo, ${name}`);
} else {
    console.log('Nama masih kosong');
}