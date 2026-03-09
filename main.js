const githubUser = 'N-dev24';
const githubRepo = 'Web-develpment-practices-'

async function cargarCarpeta (nombreCarpeta, idContenedorHTML) {
    const contenedor = document.getElementById(idContenedorHTML);
    
    try {
        const respuesta = await fetch (`https://api.github.com/repos/${githubUser}/${githubRepo}/contents/${nombreCarpeta}`);

        if (!respuesta.ok) {
            contenedor.innerHTML = `<p style="color: gray;">Aún no hay proyectos en la sección ${nombreCarpeta}.</p>`;
            return;
        }

        const archivos = await respuesta.json();
        contenedor.innerHTML = '';
        
        archivos.forEach(item => {
            if (item.type === 'dir') {
                const tarjetaHTML = ` 
                <article class="card">
                   <h3>${idContenedorHTML.name.replace(/-/g, ' ')}
                   <a href="./${nombreCarpeta}/${item.name}/index.html" class="btn">Ver proyecto</a>
                </article>
            `;
            contenedor.innerHTML += tarjetaHTML;
            }
        });
    } catch (error) {
        console.error("Error al cargar los datos", error);
    }
}

cargarCarpeta('Clase', 'grid-class');

cargarCarpeta('Personal', 'grid-personal');