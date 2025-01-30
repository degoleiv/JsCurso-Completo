// forma antigua cambiar contexto de this 
// function saludar (rest){
//     console.log(this, ...rest);
// }

// saludar.call({propiedad: 'hola mundo'}, 1 , 5)
// saludar.apply({propiedad: 'hola mundo'}, [1 , 5])
// me devuelve una nueva funcion
// let nuevoSaludar = saludar.bind({propiedad: 'hola mundo'})
// nuevoSaludar(1,5);

// contextos de this

const user = {
    nombre :'nicolas',
    ciudadanias: ['chile', 'colombia', 'peru'],
    mostrarCiudadanias (){


        // las fat arrow function no tienen this se hereda de donde se ejecute
        this.ciudadanias.forEach(function (ciudadania ) {
            // !
            let self = this;
            // las funciones apuntan en this a window 
            // console.log(this.nombre, ciudadania);

            this.ciudadanias.forEach(function (ciudadania){
                            //undefined
                console.log(this.nombre, ciudadania);
                
            });
          
        // !
        },this).bind(this);      
    },
}

user.mostrarCiudadanias();