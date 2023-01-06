// assignment operator
let x = 10;
let y = 5;

x += y; // shortcut

console.log(x);


// comparison operator
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

let aString = '10';
let aNumber = 10;

console.log(aString == aNumber); // nilainya sama
console.log(aString === aNumber); // tidak identik tipe datanya


// logical operator
let logicalNumber1 = 10;
let logicalNumber2 = 12;

console.log(logicalNumber1 < 15 && logicalNumber2 > 10);
console.log(logicalNumber1 > 15 && logicalNumber2 > 10);

console.log(logicalNumber1 < 15 || logicalNumber2 > 10);
console.log(logicalNumber1 > 15 || logicalNumber2 > 10);

console.log(!(logicalNumber1 < 15));
console.log(!(logicalNumber1 < 15 && logicalNumber2 > 10));