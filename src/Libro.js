class Libro {
    constructor(titulo, precio, antiguedad) {
      this.titulo = titulo;
      this.precio = precio;
      this.antiguedad = antiguedad;
    }


    
    calcularDescuento() {
        if (this.antiguedad === 0) {
          return this.precio * 0.1; // Descuento del 10% para libros nuevos.
        } else if (this.antiguedad >= 5) {
          return this.precio * 0.2; // Descuento del 20% para libros antiguos.
        } else {
          return this.precio * 0.15; // Descuento del 15% para otros libros.
        }
      }
  }
  
  export default Libro;