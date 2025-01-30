function Usuario (){
    this.name = 'Nicolas';
    // al crear una variable desde una funcion o una constante esta sera privada 
    let log = function (){}

    // al definir como this este sera publica y se podra remplazar 
    this.guardar= function (){
        console.log('guardando');
    };
}

const usuario = new Usuario ();
usuario.log = function (){
    console.log('remplazando funcion')
}