class Libro {
  
    constructor(titulo, precio, antiguedad,fechaRegistro) {
      this.titulo = titulo;
      this.precio = precio;
      this.antiguedad = antiguedad;
      this.fechaRegistro = fechaRegistro
    }

    DESCUENTO_LIBRO_NUEVO = 0;
    DESCUENTO_LIBRO_ANTIGUO = 0.50;
    DESCUENTO_LIBRO_NORMAL = 0.10;

  //Función para obtener el descuento
  obtenerDescuento() {
    //const { precio, fechaRegistro } = this.props;
    let descuento = 0;
    let fechaActual = new Date();
    console.log("fecha", fechaActual);
    
    let anioActual = fechaActual.getFullYear();
    console.log("anioActual", anioActual);
    
    let fechaLibro = new Date(this.fechaRegistro);
    let anioLibro = fechaLibro.getFullYear();
    console.log("anioLibro", anioLibro);

    let antiguedad = anioActual - anioLibro;
    if (antiguedad == 0)
      descuento = this.precio * this.DESCUENTO_LIBRO_NUEVO;
    else if (antiguedad >= 10)
      descuento = this.precio * this.DESCUENTO_LIBRO_ANTIGUO;
    else 
      descuento = this.precio * this.DESCUENTO_LIBRO_NORMAL;
    
    
      console.log("descuento", descuento);
    return descuento;
  }

  }
  
  export default Libro; 
