
// let a = 1;
// let b = a;
// b++;
// console.log(a, b); //1, 2


// se modifican los dos objetos porque estamos accediendo a la referencia y modificando el valor de esa direccíon en memoria
let a = {};
let b = a;
b.prop = 1;
console.log(a, b);


