
//?combinando y  dividiendo
let arr1  =[1,2];
let arr2  =[3,4];
// no modifica los arreglos crea uno nuevo a partir de los dos array 
let comb = arr1.concat(arr2);
console.log({arr1, arr2, comb});
//dividir el array desde hasta
// let divididos = combinados.slice(1, 3);
//tomar desde el indice hasta el final
let divididos = combinados.slice(1);
//no es una referencia, este es una copia de sus elementos por referencia
let copia = combinados.slice();

