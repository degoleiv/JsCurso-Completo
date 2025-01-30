const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
];


// usuarios.indexOf(
//     { id: 2, name: 'Feliz' }
// );

// predicate : funcion que devuelve true o false 
const resultado = usuarios.find(usu => usu.id === 1 );
// devuelve el indice y no el elemento
const indice = usuarios.findIndex(usu => usu.id === 1 );
console.log();

