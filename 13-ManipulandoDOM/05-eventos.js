// crear un formulario con un input de texto y un botón
let form = document.createElement('form');
form.id = 'mi formulario';

let input = document.createElement('input');
input.setAttribute('type', 'text');

let button = document.createElement('button');
button.innerText = 'Enviar';

form.append(input);
form.append(button);

document.body.append(form);

// eventos


//al pasar por encima del mouse se ejecuta el evento
form.onmouseenter = e =>{console.log('mouse enter', e)};

//al salir el mouse del elemento se ejecuta el evento
form.onmouseleave = e =>{console.log('mouse leave', e)};

//este evento se ejecuta al clickear el elemento 
input.onfocus = e =>{console.log('focus', e)};

//al pinchar para salir de un elemento clickeado
input.onblur = e =>{console.log('blur', e)};

//cuando el valor del campo cambia
input.onchange = e =>{console.log('change', e.target.value)};

//ejecutar cuando se presiona un click
button.onclick = e => {
    e.preventDefault(); //impedir que se refresque la pagina
    console.log('click', e);
}
//se suscribe a un evento que le demos y la funcion 
button.addEventListener('click', e => {
    e.preventDefault(); //impedir que se refresque la pagina
    console.log('click', e);
});