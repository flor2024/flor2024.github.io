function mostrarImagen(id, productoId) {
    const images = document.querySelectorAll(`#${productoId} .imagenes img`);
    images.forEach(img => {
        img.style.display = 'none'; // Oculta todas las imágenes del producto
    });
    document.getElementById(id).style.display = 'block'; // Muestra la imagen seleccionada
}

function toggleDescripcion(descripcionId) {
    const descripcion = document.getElementById(descripcionId);
    descripcion.style.display = descripcion.style.display === 'none' ? 'block' : 'none';
}

function resaltarPrecio(precioId) {
    const precio = document.getElementById(precioId);
    // Alterna entre tamaño grande y pequeño
    if (precio.style.fontSize === '30px') {
        precio.style.fontSize = '25px'; // Tamaño pequeño
        precio.style.color = 'black'; // Color original
    } else {
        precio.style.fontSize = '30px'; // Tamaño grande
        precio.style.color = 'red'; // Cambia el color
    }
}

function cargarImagenSeleccionada() {
    const selector = document.getElementById('selector-imagenes');
    const selectedValue = selector.value;

    // Oculta todos los productos
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.style.display = 'none';
    });

    // Muestra el producto seleccionado
    document.getElementById(selectedValue).style.display = 'block';
}
