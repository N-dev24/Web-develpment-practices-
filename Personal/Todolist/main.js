const input = document.getElementById('TareaInput');
const boton = document.getElementById('tareaBtn');
const lista = document.getElementById('listaTareas');

boton.addEventListener('click', () => {

    //validamos que el input no este vacio
     if (input.value === "") return;

     //creamos un nuevo elemento de la lista
     const nuevaTarea = document.createElement('li');
     nuevaTarea.innerText = input.value;

     //agregamos un evento para que se borre al hacer click
     nuevaTarea.addEventListener('click', () => {
        nuevaTarea.remove();
     })

     //metemos la tarea dentro de la lista
     lista.appendChild(nuevaTarea);

     //limpiamos el input para la siguiente tarea
     input.value = "";

})