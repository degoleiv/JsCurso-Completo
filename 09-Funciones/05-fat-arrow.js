// la fat arrow functions no tienen arguments, 
// no tienen super ni this 
const suma = (a, b) => {
    // js permite pasar todos los argumentos que se desee aun sin poner una referencia
    console.log(arguments);
    // iterar los argumentos 
    Array.from(arguments)
        .reduce((acc,el)=>acc + el);
    // return a + b;

}

console.log(suma(1)); //NaN
