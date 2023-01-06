// undefined
let x;
console.log(typeof(x));


// numbers
let intNum = 10;
console.log(typeof(intNum));

let decimalNum = 15.25;
console.log(typeof(decimalNum));


// operator aritmatika
let a = 12;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// increment dan decrement
let positifx = 5;
console.log(positifx++);
console.log(positifx);

let prefix = 5;
console.log(++prefix);


// bigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

const bigIntButSmall = 7n;
console.log(bigIntButSmall);

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);


// strings
let greet = "Hello";
console.log(typeof(greet));

const question = '"What do you think of JavaScript?" I asked';
console.log(question);

const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);

let greet2 = 'Hello';
let moreGreet = greet2 + greet2;
console.log(moreGreet);

const myName = 'Ahdian';
console.log(`Hello my name is ${myName}`);


// boolean
let benar = true;
let salah = false;

console.log(typeof(benar));
console.log(typeof(salah));

let pembanding1 = 10;
let pembanding2 = 12;

let isGreater = pembanding1 > pembanding2;
let isLess = pembanding1 < pembanding2;

console.log(isGreater);
console.log(isLess);


// null
let someLaterData = null;
console.log(someLaterData);


// symbol
const id = Symbol("id");

console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);