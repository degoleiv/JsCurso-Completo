console.log(
    Math.PI, // obtener el numero de pi 3.1415
    Math.abs(-16), // valor absoluto de un numero 16
    Math.round(15.5), // redondear hacia arriba (16)
    Math.round(15.4), // redondear hacia arriba pero hasta 5 (15);
    Math.floor(15.9), // redondear hacia abajo (15)
    Math.ceil(15.1),  //redondear hacia arria 16
    Math.pow(2, 3), // elevar un numero 8
    Math.sqrt(9) //raiz cuadradra 3
); 

// devolver un numero pseudoaleatorio 
console.log(Math.random());

// funcion que genera un numero random entre 1 y 10
function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

