function dividePorTipo (arr) {
    return arr.reduce((acc, el)=>{
        const type = typeof el
        
        if (!acc[type]) acc [type] = []
        
        acc[type].push(el);
        return acc; 
    }, {});
}

const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
]

let arr = dividePorTipo(miArray);
console.log(arr);
