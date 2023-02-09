let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);

jonas = null;

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 1000)

// penggunaan WeakMap
const { inspect } = require('util');

let visitsCountMap2 = new WeakMap();

function countUser2(user2) {
    let count2 = visitsCountMap2.get(user2) || 0;
    visitsCountMap2.set(user2, count2 + 1);
}

let jonas2 = { name2: "Jonas2" };

countUser2(jonas2);

jonas2 = null;

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMap2, { showHidden: true }));
}, 10000);