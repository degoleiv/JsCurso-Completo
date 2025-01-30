let el = document.createElement('p');
el.innerHTML = "elemento creado";

//texto y nodos
document.body.appendChild(el);

el.remove();
//agregar al inicio
document.body.prepend(el);

//no se va a agregar varias veces


let div = document.createElement('div');
div.innerHTML = "soy un texto";
//remplazar un elemento
el.replaceWith(div);
//alternativa para remplazar elementos
//remplazar el segundo con el primero
document.body.replaceChild(el, div);
//remover un elemento
document.body.removeChild(el);
//agregar pero solo recibe nodos
document.bodyappendChild(el);
//insertar antes de un elemento indicado
document.body.insertBefore(div, el);

document.body.insertAdjacentElement('beforebegin', div);
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentElement('beforeend', div);
document.body.insertAdjacentElement('afterend', div);


