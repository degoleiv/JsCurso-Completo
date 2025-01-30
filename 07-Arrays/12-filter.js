const usuarios = [
    {edad: 17 , nombre : 'nico'},
    {edad: 13 , nombre : 'maria'},
    {edad: 23 , nombre : 'tatiana'},
    {edad: 28 , nombre : 'dego'},
];

const mayores = usuarios.filter(u => {u.edad > 17}); 
console.log(mayores);