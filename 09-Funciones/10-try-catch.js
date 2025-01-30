function sumaTodo (arr){
    if (!Array.isArray(arr)){
        throw new Error('el parametro no es un array');
    }
    
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)){
            throw new Error ("no es un numero")
        }    
        return acc + el
    });
}

try {
    console.log(sumaTodo([1, 2, NaN, 'hola mundo']));
}
catch(e){
    console.log(e.message);
    
}

// seguir la ejecucion del codigo

console.log('terminando operacion');


// sweetAlert.com 
// sentry 

