const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premiun'},
    {edad: 13, nombre: 'Chanchito', plan: 'free'},
    {edad: 32, nombre: 'Fernanda', plan: 'free'},
];

const users = [
    {age: 17, name: 'Michael', membership: 'premiun'},
    {age: 17, name: 'Kevin', membership: 'free'},
    {age: 17, name: 'Happy pig', membership: 'free'},
];

const dictionary = {
    age : 'edad' ,
    name : 'nombre' ,
    membership : 'plan'
};

const formatUsers = users.map(u => {
    let dic = {};
    for ( let key in u) {
        dic[dictionary[key]] = u[key];
    }
    return dic;
});

const globalUsers = [...formatUsers, ...usuarios];
console.log(globalUsers)
globalUsers.sort((a,b) => {
    if(a.edad > b.edad) return -1
    if(a.edad < b.edad) return 1
    return 0
}
)

const globalTags = globalUsers.map(
    u => `<li> Nombre: ${u.nombre}, Edad: ${u.edad} </li>`
)

html = `
    <ul>
        ${globalTags.join(`
        `)}
    </ul>
`
console.log(html);
