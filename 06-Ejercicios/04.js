let objeto = {
    id: 1,
    name: 'Chanchito',
    login : function (){},
    logout: function (){},
}

function cualesMetodos (obj) {
    for (key in obj){
        if (typeof obj[key] === 'function'){
            console.log(key);
        }

    }
}
cualesMetodos(objeto);