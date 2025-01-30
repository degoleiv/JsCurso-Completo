// se puede declarar literar 
function Punto (x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function (){console.log('Dibujando...')};
}
// o con un constructor para crear la clase 
// const Point = new Function ('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function (){console.log('Dibujando...')};
//     `);
// const p = new Point (1, 2);
// console.log(p);

/**RECOMENDACION: 
 * no usar nunca en la vida esto 
 * 
 */



//* EXTENDER OBJETOS
// metodo call de las funciones

// el primer argumento es el contexto de this, y luego los parametros de la funcion 

// vamos a darle como default constructor el objeto de punto y luego agregamos lo que se asigne en el constructor de el objeto
let punto = {z: 7};
Punto.call(punto, 1, 2 ); // esto no es un constructor
Punto.apply(punto, [1, 2] ); 


console.log(punto)

