import Libro from './Libro';


describe('Libro',()=>{

    it('Calcular el descuento correctamente para un libro nuevo',() =>{
        const libroNuevo = new Libro('TestingBook',10,100,'2023-09-15');
        const descuentoEsperado = 0;
        expect(libroNuevo.obtenerDescuento()).toBe(descuentoEsperado);

    });

    it('Calcular el descuento correctamente para un libro antiguo',() =>{
        const libroAntiguo = new Libro('TestingBook2',25,20,'2010-05-06');
        const descuentoEsperado = 12.5;
        expect(libroAntiguo.obtenerDescuento()).toBe(descuentoEsperado);
    });

    it('Calcular el descuento correctamente para un libro con antiguedad intermedia ',() =>{
        const libroIntermedio = new Libro('testingBook3',60,50,'2021-05-06');
        const descuentoEsperado = 6;
        expect(libroIntermedio.obtenerDescuento()).toBe(descuentoEsperado);
    });


});