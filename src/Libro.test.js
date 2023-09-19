// Libro.test.js
import Libro from './Libro'; // Asegúrate de ajustar la ruta según la ubicación real de tu archivo Libro.js

describe('Libro', () => {
  it('debe calcular el descuento correctamente para un libro nuevo', () => {
    const libroNuevo = new Libro('Título', 100, 0);
    const descuentoEsperado = 10; // Descuento esperado para un libro nuevo del 10%
    expect(libroNuevo.calcularDescuento()).toBe(descuentoEsperado);
  });

  it('debe calcular el descuento correctamente para un libro antiguo', () => {
    const libroAntiguo = new Libro('Otro Título', 20, 5);
    const descuentoEsperado = 4; // Descuento esperado para un libro antiguo del 20%
    expect(libroAntiguo.calcularDescuento()).toBe(descuentoEsperado);
  });

  it('debe calcular el descuento correctamente para un libro con antigüedad intermedia', () => {
    const libroIntermedio = new Libro('Libro Intermedio', 50, 3);
    const descuentoEsperado = 7.5; // Descuento esperado para un libro con antigüedad intermedia del 15%
    expect(libroIntermedio.calcularDescuento()).toBe(descuentoEsperado);
  });
  
});
