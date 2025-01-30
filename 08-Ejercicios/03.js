const usuarios = [
    {edad:17, nombre: 'Nico', plan:'premiun'},
    {edad:22, nombre: 'karen', plan:'free'},
    {edad:23, nombre: 'tatiana', plan:'free'},
    {edad:54, nombre: 'maria', plan:'gold'},
    {edad:45, nombre: 'dego', plan:'premiun'},
];
function getPaidUsers (usrs){
    return usrs.filter(u => u.plan !== 'free');
}

console.log(getPaidUsers(usuarios));