const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);

// Spread Operator
console.log(...favorites);

// Menggabungkan 2 array tanpa spread operator
const food = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [food, others];
console.log(allFavorites);

// Menggabungkan 2 array dengan spread operator
const food2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others2 = ["Cake", "Pie", "Donut"];

const allFavorites2 = [...food2, ...others2];
console.log(allFavorites2);

// Menggabungkan 2 object dengan spread operator
const obj1 = {
    firstName: 'Obi-Wan',
    age: 30,
};
const obj2 = {
    lastName: 'Kenobi',
    gender: 'M'
};

const newObj = {...obj1, ...obj2};
console.log(newObj);