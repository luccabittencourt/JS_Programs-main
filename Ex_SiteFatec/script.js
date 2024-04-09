function disciplinas(){
    let materias = []
    let listas = document.querySelectorAll(".tab-grid-content-header > strong:first-child");
    for (let i = 0; i < listas.length; i++) {
     materias.push(listas[i].innerHTML);
    }
    return materias;
    }    