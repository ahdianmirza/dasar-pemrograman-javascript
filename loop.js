// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('\n');
// =========================================================================================

// for of loop
let myArray = ['Luke', 'Han', 'Chewbacca', 'Leia'];

for (const arrayItem of myArray) {
    console.log(arrayItem);
}

console.log('\n');
// =========================================================================================

// while and do-while
let index = 1;

while (index <= 10) {
    console.log(index);
    index++;
}

do {
    console.log(index);
    index++;
} while (index <= 10);