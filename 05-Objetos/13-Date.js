const now = new Date ();
// console.log('fecha actual', now);

const fecha = new Date('December 11 1986 14:15 GMT-0300');
// console.log(fecha);


//MES DIA AÑO
const fecha2 = new Date (1986, 11, 25, 14, 15);
// console.log(fecha2);

const fecha3 = new Date (1986, 11, 25, 14 + 15 , 15);
console.log(fecha3);

// fechas en formato internacional
console.log(fecha3.toDateString());
// para guardar en servidor 
console.log(fecha3.toISOString());
// imprimir hora 
console.log(fecha3.toTimeString());

// obtener años , mes , dia

fecha2.getDate() //obtener dia del mes
fecha2.getDay() // obtener el dia de la semana
fecha2.getMinutes() //obtener minutos 

// para modificar no se usa get sino set


