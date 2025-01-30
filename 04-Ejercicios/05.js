function getMayorMenor(array) {
    maxMin = [];
    let min = array[0];
    let max = array[0];
    for (el of array){
        min = el < min ? el: min;
        max = el > max ? el: max;
    }
    return [menor, mayor];

}

let array = [2, 5, 7, 15, -5, -100, 55];

let numeros = getMayorMenor(array);

console.log(numeros);