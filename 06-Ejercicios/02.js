function createUsuario (name){
    return {
        id:Math.random(),
        nombre:name
    }
}
let user = createUsuario('Felipe');
let user2 = createUsuario('Chanchito');