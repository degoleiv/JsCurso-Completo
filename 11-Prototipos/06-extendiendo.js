Object.prototype.isEqual = function (obj){//...
}


// se estarian remplazando los metodos a como se implemento primera mente 
let x = {}
x.isEqual({a: 1});
// no se recomienda extender metodos de estos prototipos nativos de js Array, Number, Boolean