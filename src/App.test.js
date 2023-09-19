import { render, screen } from '@testing-library/react';
import App from './App';


test('renders new text in the component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Título/i); // Reemplaza "Texto Actualizado" con el texto actual en tu componente
  expect(linkElement).toBeInTheDocument();
});

