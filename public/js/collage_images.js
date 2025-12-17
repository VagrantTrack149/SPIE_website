async function cargarBento() {
    const collage= document.getElementById('collage_images');
    if (!collage) return;
    try {
        const respuesta= await fetch('/api/activities');
        const data = await respuesta.json();
        collage.innerHTML = '';
        data.forEach((seccion)=>{
            const titlo= document.createElement('h3');
            titlo.textContent=seccion.evento;
            titlo.className='h-fit text-3xl font-bold text-gray-800 border-b';
            collage.appendChild(titlo);
            seccion.imagenes.forEach((nombre_archivo,i)=>{
                const div= document.createElement('div');
                var spanClases='col-span-1 row-span-1';
                if (i%5===0) {
                    spanClases='col-span-1 row-span-2'; //vertical
                }else if (i %6 ===0) {
                    spanClases='col-span-2 row-span-1' //horitonzal larga
                }
                div.className=spanClases + ' group cursor-pointer relative overflow-hidden rounded-xl shadow-lg';
                const img= document.createElement('img');
                img.src='./img/activities/'+seccion.evento+'/'+nombre_archivo;
                img.alt=nombre_archivo;
                img.className = 'w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110';

                div.appendChild(img);
                collage.appendChild(div);

                // Evento Click
                div.onclick = () => window.open(img.src, '_blank');
            });
            /*
            const div= document.createElement('div');
            var spanClases='col-span-1 row-span-1';
            if (i % 4===0) {
                spanClases= ' col-span-1 row-span-2'; //vertical
            }else if (i%7===0) {
                spanClases='col-span-2 row-span-1'; //horizontal
            }
                div.className=spanClases+' group cursor-pointer relative overflow-hidden rounded-xl shadow-lg';
                const img= document.createElement('img');
                img.src='./img/activities/'+nombre_archivo;
                img.alt=nombre_archivo;
                img.className = 'w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110';

                div.appendChild(img);
                collage.appendChild(div);

                // Evento Click
                div.onclick = () => window.open(img.src, '_blank');*/
            })
    } catch (error) {
        console.error("Error cargando imágenes:", error);
    }
}

/*collage= document.getElementById('collage_images');
for (let i = 1; i <= 20; i++) {
    const div = document.createElement('div');
    var spanClases= 'col-span-1 row-span-1';
    if (i % 4===0) {
        spanClases= ' col-span-1 row-span-2'; //grandes
    }else if (i%7===0) {
        spanClases='col-span-2 row-span-1'; //anchas
    }

    div.className = spanClases+' group cursor-pointer relative';
    const img = document.createElement('img');
    img.src = './img/activities/activity'+i+'.jpg';
    img.alt = 'Activity'+i;
    img.className = 'w-full h-fit object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105';
    div.appendChild(img);
    collage.appendChild(div);
}
const collageImages = document.querySelectorAll('.group');

collageImages.forEach((imageDiv) => {
    imageDiv.addEventListener('click', () => {
        const img = imageDiv.querySelector('img');
        window.open(img.src, '_blank');
    });
});*/

//cargarBento();

document.addEventListener('DOMContentLoaded',() =>{
    cargarBento()
});
