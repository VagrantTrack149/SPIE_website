
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
        const activo_class=['border-b-2', 'border-red-700', 'md:text-white'];
        const desactivo_class=['bg-brand', 'md:text-fg-brand'];
        let elemento;
        switch (ruta) {
            case '/Inicio':
            case '/':
                elemento = document.getElementById('inicio');
                break;
            case '/Members':
                elemento = document.getElementById('Members');
                
                break;
            case '/About':
                elemento = document.getElementById('about');
                
                break;
            case '/Contact':
                elemento = document.getElementById('Contact');
                
                break;
            case '/Activites':
                elemento = document.getElementById('Activites');
                
                break;
            default:
                console.log("No se encontró la ruta correspondiente para resaltar el menú.");
                console.log("Ruta actual:", ruta);
                break;
        }
        if (elemento) {
            elemento.classList.remove(...desactivo_class);
            elemento.classList.add(...activo_class);
        }
}

function setupToggle() {
    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-collapse-toggle="navbar-default"]');
        if (button) {
            const menu = document.getElementById('navbar-default');
            if (menu) {
                menu.classList.toggle('hidden');
                
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
            }
        }
    });
}

footer=document.createElement("footer");
function LoadFooter() {
    return fetch('./components/footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
            document.body.appendChild(footer)
            //console.log(data);
            return true;
        })
        .catch(error => {
            console.error('Error en la carga:', error);
            return false;
        });
}


document.addEventListener('DOMContentLoaded',() =>{
    navheader= document.getElementById('nav-header');
    //header= document.getElementById('nav-header');
    footer=document.createElement('footer');
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
    setupToggle();
    LoadFooter();
});
