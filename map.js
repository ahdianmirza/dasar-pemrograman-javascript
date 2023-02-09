const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a numbey key'],
    [true, true],
]);

console.log(myMap);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);

// cara memanggil data map yang salah
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));