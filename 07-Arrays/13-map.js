const usuarios = [
    {nombre:'juan', edad:17},
    {nombre:'carlos', edad:14},
    {nombre:'dego', edad:15},
    {nombre:'leiv', edad:16},
];

const nombres = usuarios.map(u => `<li>${u.nombre}</li>` );
const html = `<ol>${nombres.join('')}</ol>`
console.log(html);

// const mayores = usuarios.map(u => ({
//         ...u,
//         mayor: u.edad > 17,
//     })
// );


