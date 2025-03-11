const textoVisitas = document.getElementById('contadorVisitas');

let visitas = localStorage.getItem('views');

const btnReestablecer = document.getElementById('btnReestablecer');
btnReestablecer.addEventListener('click', resetVisits);

if(visitas){
    visitas = Number(visitas)+1
    localStorage.setItem('views', visitas);
    textoVisitas.innerText = visitas;
} else {
    localStorage.setItem('views', 1);
    textoVisitas.innerText = 1;
}

function resetVisits() {
    localStorage.clear('views');
    textoVisitas.innerText = 0;
}

console.log(localStorage.getItem('views'));