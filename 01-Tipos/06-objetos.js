/**
 * agrupacion de datos, 
 * que tiene sentido tener juntos
 */  

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

//llave (atributo, propiedad) : valor 
personaje = {
    nombre: "Tanjiro",
    anime : "Demon Slayer",
    edad : 16, //agregar coma al final, para git modificar solo una linea y no dos
};

//accediendo a las propiedades del objeto
console.log("personaje:", personaje );

console.log("personaje:", personaje.nombre);

console.log("personaje:", personaje['edad']);


// cambiar propiedades 
personaje.anime = "kimetsu no yaiba";
personaje ["edad"] = 15;

//eliminando propiedades de un objeto

delete personaje.anime;

