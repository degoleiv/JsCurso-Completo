// contextos de this

const user = {
    nombre :'nicolas',
    ciudadanias: ['chile', 'colombia', 'peru'],
    mostrarCiudadanias (){
        // las fat arrow function no tienen this se hereda de donde se ejecute
        this.ciudadanias.forEach(ciudadania => {
            // las funciones apuntan en this a window 
            // console.log(this.nombre, ciudadania);

            this.ciudadanias.forEach(function (ciudadania){
                            //undefined
                console.log(this.nombre, ciudadania);
                
            });
            this.ciudadanias.forEach( (ciudadania) => {
                            //undefined
                console.log(this.nombre, ciudadania);
                
            });
            
        });      
    },
}

user.mostrarCiudadanias();