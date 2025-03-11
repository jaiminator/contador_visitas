//OBTENEMOS EL SPAN CON EL ID 'contadorVisitas'
const textoVisitas = document.getElementById('contadorVisitas');

//ASIGNAMOS 'VISITAS' CON EL VALOR OBTENIDO DE LA CLAVE 'views'
let visitas = localStorage.getItem('views');

//OBTENEMOS Y ASIGNAMOS EVENTO AL BOTÓN PARA REESTABLECER EL CONTADOR DE VISITAS
const btnReestablecer = document.getElementById('btnReestablecer');
btnReestablecer.addEventListener('click', resetVisits);

//SI HAY VISITAS
if(visitas){
    visitas++; //INCREMENTAMOS LAS VISITAS EN 1
    localStorage.setItem('views', visitas);  //ACTUALIZAMOS EL VALOR DE LA CLAVE 'views'
    textoVisitas.innerText = visitas;   //IMPRIMIMOS POR PANTALLA EL NÚMERO TOTAL DE VISITAS
} else {
    localStorage.setItem('views', 1);
    textoVisitas.innerText = 1;
}

//FUNCIÓN PARA BORRAR LAS CLAVE 'views' Y REESTABLECER EL Nº DE VISITAS A 0
function resetVisits() {
    localStorage.clear('views');
    textoVisitas.innerText = 0;
}

console.log(localStorage.getItem('views')); //MUESTRA EL ITEM 'views' POR CONSOLA