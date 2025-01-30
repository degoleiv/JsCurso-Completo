function cuantosPositivos(array) {
    let positivos = 0;
    for (el of array){
        positivos += el > 0 ? 1 : 0;
    }
    return positivos;
}

let array = [2, 5, 7, 15, -5, -100, 55];

let cantidad = cuantosPositivos(array);

console.log(cantidad);