precio = 400000;

precioSpan = document.querySelector('.precio-inicial');
precioSpan.innerHTML = precio;

// Inicializar valores
const precioInicial = 400000;
let cantidad = 0;

// Elementos del DOM
const cantidadElement = document.querySelector('.cantidad');
const valorTotalElement = document.querySelector('.valor-total');

// Función para actualizar la cantidad y el total a pagar
function actualizarCantidadYTotal() {
  cantidadElement.textContent = cantidad;
  const total = cantidad * precioInicial;
  valorTotalElement.textContent = total;
}

// Manejar clic en el botón de incrementar
document.getElementById('incrementar').addEventListener('click', () => {
  cantidad++;
  actualizarCantidadYTotal();
});

// Manejar clic en el botón de decrementar
document.getElementById('decrementar').addEventListener('click', () => {
  if (cantidad > 0) {
    cantidad--;
  }
  actualizarCantidadYTotal();
});
