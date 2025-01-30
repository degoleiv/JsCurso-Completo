const usuarios = [
    {edad:17, nombre: 'Nico', plan:'premiun'},
    {edad:22, nombre: 'karen', plan:'free'},
    {edad:23, nombre: 'tatiana', plan:'free'},
    {edad:54, nombre: 'maria', plan:'gold'},
    {edad:45, nombre: 'dego', plan:'premiun'},
];

function cuantosPremiun (usrs){
    return usrs.reduce((acc, el)=> el.plan !== 'free' ? acc + 1 : acc, 0);
}

function cuantosMayores (usrs){
    return usrs.reduce((acc, el)=> el.edad > 17 ? acc + 1 : acc, 0);
}
console.log(cuantosPremiun(usuarios));
console.log(cuantosMayores(usuarios));