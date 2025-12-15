
navheader= document.getElementById('nav-header');
//header= document.getElementById('nav-header');
if (!navheader) {
    console.error('Elemento con id "nav-header" no encontrado.');
}

function loadNavHeader() {
    fetch('./components/navbar.html')
        .then(response => response.text())
        .then(data => {
            //console.log(data);
            navheader.innerHTML = data;
        })
        .catch(error => {
            console.error('Error en la carga:', error);
        });
}

document.addEventListener('DOMContentLoaded',() =>{
    loadNavHeader();
});
