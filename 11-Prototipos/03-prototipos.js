let x = {};
console.log(x);

// {[[prototype]]}
// x.__proto__  no usar esto ya que se va a eliminar en cualquier momento

// Javascript  
/**
 * Object es una funcion constructora que tiene un prototipo 
 * Propiedades de un prototipo 
 * 
 * Constructor 
 * __proto__
 * usar el get prototipe
 */

Object.getPrototypeOf(x); // validar el prototipo 

Object.prototype;

// prototype change 
// el array que creamos no tiene metodos de lista pero si contiene el prototipo de Array lo que significa que al llamar a este metodo se buscara en la lista y como no lo encuentra lo buscara en el prototipo, array tambien contiene un prototipo de Object el cual cumplira con las mismas condiciones hacia arriba 
// [] -> Array -> Object