let longitud = 7;
function crearArray (n){
    array = [];
    if (n <= 0){
        return array;
    }
    for (let i = 0; i < n; i++){
        array[i] = i + 1;
    }
    return array;
}
let resultado = crearArray(longitud);
console.log(resultado);