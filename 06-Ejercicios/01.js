function Usuario (name){
    this.id = Math.random();
    this.nombre = name;
    
}

let user = new Usuario ('Felipe');
let user2 = new Usuario ('Chanchito');
console.log(user, user2);

