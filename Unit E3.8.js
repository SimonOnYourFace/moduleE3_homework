// Задание 5

let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]

]);

console.log(fruits.keys())

for (let pair of fruits.entries()) {
    console.log(`Ключ - ${pair[0]}, значение = ${pair[1]}`);
}
