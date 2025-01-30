function precioCompleto (precio, impuesto){
    valorImpuesto = precio * impuesto ;
    return precio + valorImpuesto;
}
const valor = precioCompleto (19.90, 0.15);
console.log(valor);