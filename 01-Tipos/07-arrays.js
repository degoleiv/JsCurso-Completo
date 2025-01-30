// arrays, arreglo -> colección


let animales = []; //array literal ; vacio
let colores = ["azul","verde","rojo"]; //array literal; lleno
//los indices de un array comienzan desde 0 

console.log(colores);
//acceder a los valores por indice 
console.log(colores [0]); //azul
//agregar elementos por indice o modificar

colores[0] = "amarillo";
//si se pasa un indice que no existe

colores[10]= "morado"; //elementos desde 3 hasta 9 seran empty

//que tipo de dato es array 
console.log (typeof colores); //object

/** 
 * los arrays funcionan como objetos, 
 * y se pueden acceder a su prototipo
*/

//verificar la cantidad de elementos de la lista 
console.log(colores.length);