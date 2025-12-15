
navheader= document.getElementById('nav-header');
//header= document.getElementById('nav-header');
if (!navheader) {
    console.error('Elemento con id "nav-header" no encontrado.');
}

function loadNavHeader() {
    return fetch('./components/navbar.html')
        .then(response => response.text())
        .then(data => {
            navheader.innerHTML = data;
            //console.log(data);
            return true;
        })
        .catch(error => {
            console.error('Error en la carga:', error);
            return false;
        });
}

function ChangeColorHeader() {
    const ruta = location.pathname;
        console.log("Ruta y archivo:", ruta);
        switch (ruta) {
            case '/Inicio':
                const inicio = document.getElementById('inicio');
                console.log(inicio);
                if (inicio) {
                    inicio.classList.add('bg-red-700', 'p-1.5');
                    console.log("Clase agregada a Inicio");
                }

                break;
            case '/Members':
                const members = document.getElementById('Members');
                if (members) {
                    members.classList.add('bg-red-700', 'p-1.5');
                }
                break;
            case '/About':
                const about = document.getElementById('about');
                if (about) {
                    about.classList.add('bg-red-700', 'p-1.5');
                }
                break;
            case '/Contact':
                const contact = document.getElementById('Contact');
                if (contact) {
                    contact.classList.add('bg-red-700', 'p-1.5');
                }
                break;
            case '/Activites':
                const Activites = document.getElementById('Activites');
                if (Activites) {
                    Activites.classList.add('bg-red-700', 'p-1.5');
                }
                break;
            default:
                console.log("No se encontró la ruta correspondiente para resaltar el menú.");
                console.log("Ruta actual:", ruta);
                break;
        }
}        
document.addEventListener('DOMContentLoaded',() =>{
    navheader= document.getElementById('nav-header');
    //header= document.getElementById('nav-header');
    if (!navheader) {
        console.error('Elemento con id "nav-header" no encontrado.');
    }
    //loadNavHeader();
    //ChangeColorHeader();
    loadNavHeader().then(loaded => {
        if (loaded) {
            ChangeColorHeader();
        }
    });
});
