const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// destructuring array pada index tertentu
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood2] = favorites2;

console.log(thirdFood2);

// destructuring assignment
const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood3 = "Ice Cream";
let herFood3 = "Noodles";

[myFood3, herFood3] = favorites3;

console.log(myFood3);
console.log(herFood3);

// menukar nilai antar dua variable menggunakan destructuring array
// cara lama
let a = 1;
let b = 2;
let temp;

console.log("Sebelum swap");
console.log(`Nilai a: ${a}`);
console.log(`Nilai a: ${b}`);

temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log(`Nilai a: ${a}`);
console.log(`Nilai a: ${b}`);

// cara destructuring array
let a2 = 1;
let b2 = 2;

console.log("Sebelum swap");
console.log(`Nilai a: ${a2}`);
console.log(`Nilai a: ${b2}`);

[a2, b2] = [b2, a2];

console.log("Setelah swap");
console.log(`Nilai a: ${a2}`);
console.log(`Nilai b: ${b2}`);

// Default Values
const favorites4 = ["Seafood"];
// const [myFood4, herFood4] = favorites4;
const [myFood4, herFood4 = "Salad"] = favorites4;

console.log(myFood4);
console.log(herFood4);