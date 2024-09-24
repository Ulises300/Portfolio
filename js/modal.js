const modal = document.getElementById('myModal');
const closeModalSpan = document.getElementsByClassName('close')[0];

function openModal() {
    modal.style.display = 'flex';
}

// // Cerrar el modal al hacer clic en la "X"
closeModalSpan.onclick = function() {
    modal.style.display = 'none';
}

// // Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
function getPagina(id){
	openModal();
	fetch('../json/paginas.json')
	    .then(response => response.json())
	    .then(data => {
	        // Supongamos que quieres buscar el objeto con id igual a 3

	        const idBuscado = parseInt(id);

	        // Utiliza el método find para encontrar el objeto con el id especificado
	        const pagina = data.find(objeto => objeto.id === idBuscado);

	        if (pagina) {
	            // Si se encuentra el objeto, imprime sus detalles
	            document.getElementById('modalTitle').innerHTML = pagina.titulo
	            document.getElementById('modalDescription').innerHTML = pagina.detalles
	            document.getElementById('modalImage').src = pagina.ruta_foto
	            document.getElementById('modalLink').href = pagina.enlace

	            console.log('Título:', pagina.titulo);
	            console.log('Detalles resumidos:', pagina.detalles_resumido);
	            console.log('Enlace:', pagina.enlace);
	        } else {
	            console.log('No se encontró un objeto con el id:', idBuscado);
	        }
	    })
	    .catch(error => console.error('Error al cargar el JSON:', error));

}
