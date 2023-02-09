const profile = {
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
};

// const {firstName, lastName, age} = profile;
const {lastName} = profile;

console.log(lastName);

// Destructuring Assignment
const profile2 = {
    firstName2: 'Budi',
    lastName2: 'Syahputra',
    age2: 18,
};

let firstName2 = 'Dimas';
let age2 = 20;

// menginisialisasi nilai baru melalui destructuring object
({firstName2, age2} = profile2);

console.log(firstName2, age2);

// Default Values
const profile3 = {
    firstName3: 'Adi',
    lastName3: 'Bahari',
    age3: 29,
};

// const {firstName3, lastName3, isMale3} = profile3;
const {firstName3, lastName3, isMale3 = false} = profile3;

console.log(firstName3);
console.log(lastName3);
console.log(isMale3);

// Assigning to Different Local Variable Names
const profile4 = {
    firstName4: 'Hari',
    lastName4: 'Senin',
    age4: 25,
};

const {firstName4: localFirstName4, lastName4: localLastName4, age4:localAge4} = profile4;

console.log(localFirstName4);
console.log(localLastName4);
console.log(localAge4);