
/** el hoisting es que por defecto js las variables las pone al principio del archivo 
 * para function el pondra al principio y ejecutara normalmente,
 * para var la pondra al principio pero no su valor entonces sera undefined
 * para cont y le botara un error que no se puede acceder 
 * (const y let tambien tienen hoisting pero por defecto no permiten ser llamadas antes de su declaracion)
 * 
*/ 

console.log(saludo);
console.log(vieja);
console.log(hola);
console.log(chao);

function saludo (){}
let hola = 'hola';
const chao = 'chao';
var vieja = 'ya no debes usar esto';

// esta ventana es un objeto que existe en todos los navegadores y contiene funciones accesibles del navegador lo que implica que al declarar funciones nombradas o varriables con var estos por defecto sobreescribiran algunas que esten declaradas aqui con el mismo nombre
console.log(window);