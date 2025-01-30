const usuarios = [
    {edad:17, nombre: 'Nico', plan:'premiun'},
    {edad:22, nombre: 'karen', plan:'free'},
    {edad:23, nombre: 'tatiana', plan:'free'},
    {edad:54, nombre: 'maria', plan:'gold'},
    {edad:45, nombre: 'dego', plan:'premiun'},
];


function obtenerMayor(usrs){
    let mayor = usrs [0];
    for (let user of usrs){
        if (mayor.edad < user.edad){
            mayor = user;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);