// const numeros = [1, 2, 3, 4];
//sumatoria de los elementos del array 
// const suma = numeros.reduce((acc, el)=>{
//     return acc + el;
//     }, 0);

// console.log(suma);


// const anidado = [[1,2], 3, [4,5]];

// const plano = anidado.reduce((acc, el)=> acc.concat(el)
// ,[]);

// console.log(plano);

// buscar con reduce 

const usuarios = [
    {edad :17, nombre : 'dego'},
    {edad :18, nombre : 'diana'},
    {edad :15, nombre : 'juan'},
    {edad :19, nombre : 'maria'},
    {edad :24, nombre : 'parda'},
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]:el,
}), {});
console.log(indexado)
console.log(indexado['dego']);