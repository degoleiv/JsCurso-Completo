const usuarios = [
    {edad:17, nombre: 'Nico', plan:'premiun'},
    {edad:22, nombre: 'karen', plan:'free'},
    {edad:23, nombre: 'tatiana', plan:'free'},
    {edad:54, nombre: 'maria', plan:'gold'},
    {edad:45, nombre: 'dego', plan:'premiun'},
];


//Obtener los usuarios pago
const premiun = usuarios.filter(el => el.plan !== 'free');
//Ordenar de mayor a menor edad
premiun.sort((a, b)=>{
    if (a.edad > b.edad) return -1
    if (b.edad > a.edad) return 1
    return 0
});

//Devolver el nombre del usuario
nombres = premiun.map( el => `<li>${el.nombre}</li>`);
nombresTags = nombres.join();
//Crear una plantilla HTML
template = `<ul>${nombresTags}</ul>`
//Imprimirla en consola
console.log(template);

/**
 * <ul>
 * <li></li>
 * </ul>
 */