

//? buscar elementos 
const letras_2 = ['a', 'b', 'c', 'd']; 
//* por valor primitivo encuentra el primer indice que encuentra 
console.log(letras.indexOf('a')); //devuelve el indice 3
console.log(letras.indexOf('e')); // devuelve valor -1
//! buscar por valor primitivo retornando el ultimo valor 
console.log(letras.lastIndexOf('e'));

//! obtener un boolean si un elemento se encuentra en la lista 
if (letras.includes('a')){} // true

//!comenzar a buscar desde el indice que quiera
console.log(letras.indexOf('e', 3)); // 3 ->
//* por referencia
const usuarios = [
    {id:1, name:'chanchito'},
    {id:2, name:'feliz'},
    {id:3, name:'juan'},
];
//si buscamos un objeto este no sera el mismo que el que se encuentra en el array porque su referencia es distinta 
// const resultado = usuarios.indexOf({id:1, name:'chanchito'});


// predicate: funcion que devuelve true o false 

// find recorre cada uno de los elementos del array que indiquemos y devolvera el que cumpla con la condicion especifica si no devuelve undefined
const resultado = usuarios.find(usuario =>
    usuario.id === 1);
//si esperamos que devuelva el indice de esa referencia  
resultado = usuarios.findIndex(usuario =>
    usuario.id === 1);