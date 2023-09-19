
import Libro from './Libro';

function App() {
  const libroEjemplo = new Libro('Libro de Ejemplo', 50, 2); // Título, precio, antigüedad

  return (
    <div className="App">
      <p>Hola Mundo</p>
      <p>Título del Libro: {libroEjemplo.titulo}</p>
      <p>Precio: {libroEjemplo.precio} Bs</p>
      <p>Antigüedad: {libroEjemplo.antiguedad} años</p>
      <p>Descuento: {libroEjemplo.calcularDescuento()}%</p>
    </div>
  );
}

export default App;


