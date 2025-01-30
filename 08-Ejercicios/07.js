const usuarios = [
    {edad:17, nombre: 'Nico', plan:'premiun'},
    {edad:22, nombre: 'karen', plan:'free'},
    {edad:23, nombre: 'tatiana', plan:'free'},
    {edad:54, nombre: 'maria', plan:'gold'},
    {edad:45, nombre: 'dego', plan:'premiun'},
];

function groupBy (usuarios, prop){
    return usuarios.reduce((acc, el)=>{
        const llave = el[prop];
        
        if (!acc[llave]) acc[llave] = []
        
        acc[llave].push(el);
        return acc; 
    }, {});
    
}
const grouped = groupBy(usuarios, 'plan');
console.log({grouped})