// Inicialización del número de factura actual
let facturaActual = 0;

// Función para formatear el número de factura con ceros a la izquierda
function formatearNumeroFactura(numero) {
    return numero.toString().padStart(4, '0');
}

// Función para obtener el siguiente número de factura con el formato adecuado
function obtenerSiguienteFactura() {
    return "Factura #" + formatearNumeroFactura(facturaActual);
}

// Función para asignar el identificador de compra al cargar la página
window.onload = function() {
    // Asigna el número de factura inicial
    document.getElementById('purchase-id').value = obtenerSiguienteFactura();
    // Incrementa el número de factura para la próxima vez
    facturaActual++;
};
