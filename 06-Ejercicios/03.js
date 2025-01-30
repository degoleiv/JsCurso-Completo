function similares (obj1, obj2){
    let distintos = false;
    for (key in obj1){
        if(!key in obj1 || obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

let resultado = similares (
    {id:1, name:'Nico'},
    {id:1, name:'Nico'}
);

console.log(resultado);