let myArray = ['Cokelat', 42.5, 22, true, 'Programming'];
console.log(myArray);
console.log(myArray[1]);

for (let i = 0; i <=5; i++) {
    console.log(myArray[i]);
}

console.log(`Panjang nilai myArray adalah ${myArray.length}.`);

// Menambahkan data baru pada array dengan push
myArray.push('JavaScript');
console.log(myArray);

// Mengeluarkan data terakhir pada array dengan pop
myArray.pop();
console.log(myArray);

// Mengeluarkan data pertama pada array dengan shift
myArray.shift();
console.log(myArray);

// Menambahkan data pertama pada array dengan unshift
myArray.unshift('Madu');
console.log(myArray);

// Menghapus data array dengan delete
delete myArray[1];
console.log(myArray);

myArray[1] = 42.5;
console.log(myArray);

// Menghapus data array dengan splice
myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);