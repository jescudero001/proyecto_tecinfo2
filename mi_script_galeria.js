document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todas las imágenes de la galería
    const imagenes = document.querySelectorAll(".imagen");

    // Función para mostrar un mensaje de alerta con el ID de la imagen
    const mostrarDetallesImagen = (id) => {
        alert(`Has seleccionado la Imagen ${id}`);
    };

    // Añadir un evento a cada imagen
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", () => {
            const idImagen = imagen.getAttribute("data-id");
            mostrarDetallesImagen(idImagen);
        });
    });
});
