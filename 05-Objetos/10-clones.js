let punto = {
    x: 10,
    y: 15
} 
//! (ANTIGUAMENTE)
//agregar propiedades y ademas asignar a una variable como referencia
let referencia = Object.assign(punto, {z: 20});
// tomar propiedades de un objeto y asignarlas a otro  
let clonePunto = Object.assign({}, punto, {z: 20});
console.log(punto, clonePunto);

//copia de un objeto 
let copiaPunto = Object.assign({}, punto); 
console.log(copiaPunto, punto);


//*Nueva - spread Operator

let copia3 = { ... punto };
console.log(copia3);

// FORMA MUY ANTIGUA (NO USAR)

let copia4 = {};
for (let llave in punto){
    copia4[llave] = punto[llave]
}

console.log(copia4);


