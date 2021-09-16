// Задание 1

let x = null;

if (typeof x === 'number') {
    console.log('nr is number');
}

else if (typeof x === 'string') {
    console.log('nr is string');
}

else if (typeof x === 'boolean') {
    console.log('x is boolean');
}

else {
    console.log('Тип x не определён');
}