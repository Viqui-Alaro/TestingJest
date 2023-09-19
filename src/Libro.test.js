// Libro.test.js
import Libro from './Libro'; // Asegúrate de ajustar la ruta según la ubicación real de tu archivo Libro.js

describe('Libro', () => {
  it('debe calcular el descuento correctamente para un libro nuevo', () => {
    const libroNuevo = new Libro('Título', 100, 0);
    const descuentoEsperado = 10; // Descuento esperado para un libro nuevo del 10%
    expect(libroNuevo.calcularDescuento()).toBe(descuentoEsperado);
  });


  
});
