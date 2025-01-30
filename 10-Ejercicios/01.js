const obj = {
    nombre: 'Nicolas',
}

function Extender (){
    
    this.login =()=>{
        console.log("Iniciando sesion",this.nombre);
        
    }
    this.logout =()=>{
        console.log("cerrando sesion",this.nombre);
        
    }
    
}
Extender.call(obj);

console.log(obj);
