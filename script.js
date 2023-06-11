// Obtener referencias a los elementos del DOM
const cantidadInput = document.getElementById('cantidad');
const categoriaSelect = document.getElementById('categoria');
const totalSpan = document.getElementById('total');
const resumenButton = document.getElementById('resumen');
const borrarButton = document.getElementById('borrar');

// Agregar evento al botón de resumen
resumenButton.addEventListener('click', calcularTotal);

// Agregar evento al botón de borrar
borrarButton.addEventListener('click', reiniciarPagina);

// Función para calcular el total a pagar
function calcularTotal() {
  // Obtener el valor de la cantidad y la categoría seleccionada
  const cantidad = parseFloat(cantidadInput.value);
  const categoria = categoriaSelect.value;

  // Validar que la cantidad sea un número válido
  if (isNaN(cantidad) || cantidad <= 0) {
    const mensajeError = 'La cantidad ingresada no es válida. Por favor, ingresa un número mayor a cero.';
    window.alert(mensajeError);
    return;
  }

  // Calcular el subtotal según la cantidad y el valor base de $200
  const subtotal = cantidad * 200;

  // Calcular el descuento según la categoría seleccionada
  let descuento = 0;
  if (categoria === 'Estudiante') {
    descuento = subtotal * 0.8; // 80% de descuento para estudiantes
  } else if (categoria === 'Trainee') {
    descuento = subtotal * 0.5; // 50% de descuento para trainees
  } else if (categoria === 'Junior') {
    descuento = subtotal * 0.15; // 15% de descuento para juniors
  }

  // Calcular el total a pagar restando el descuento al subtotal
  const total = subtotal - descuento;

  // Mostrar el total en el elemento del DOM correspondiente
  totalSpan.value = total.toFixed(2);
}

// Función para reiniciar la página
function reiniciarPagina() {
  // Recargar la página
  location.reload();
}