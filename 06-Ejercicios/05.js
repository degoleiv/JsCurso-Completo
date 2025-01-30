let objeto = {
    id: 1,
    name: 'Chanchito',
    login : function (){},
    logout: function (){},
}
let propiedad = 'name';
tieneProp = (obj , propiedad) => propiedad in obj;
console.log(tieneProp(objeto, propiedad));
