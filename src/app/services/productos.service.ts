import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 

  listProductos: Producto[] = [
    {nombre: 'Arroz', precio: 0.1, formato: 'Kg', marca: 'H'},
    {nombre: 'Carne', precio: 0.1, formato: 'Kg', marca: 'C'},
    {nombre: 'Naranja', precio: 0.1, formato: 'Kg', marca: 'N'},
    {nombre: 'Salsa', precio: 0.1, formato: 'Kg', marca: 'S'},
    {nombre: 'Arroz', precio: 0.1, formato: 'Kg', marca: 'H'},
    {nombre: 'Carne', precio: 0.1, formato: 'Kg', marca: 'C'},
    {nombre: 'Naranja', precio: 0.1, formato: 'Kg', marca: 'N'},
    {nombre: 'Salsa', precio: 0.1, formato: 'Kg', marca: 'S'},
    {nombre: 'Azúcar', precio: 0.1, formato: 'Kg', marca: 'A'},
    {nombre: 'Te', precio: 0.1, formato: 'Kg', marca: 'T'},
    {nombre: 'Vino', precio: 0.1, formato: 'Kg', marca: 'V'},
    {nombre: 'Cerveza', precio: 0.1, formato: 'Kg', marca: 'C'},
    {nombre: 'Jamón', precio: 0.1, formato: 'Kg', marca: 'J'},
    {nombre: 'Pavo Lonchas', precio: 0.1, formato: 'Kg', marca: 'PL'},
    {nombre: 'Cerdo', precio: 0.1, formato: 'Kg', marca: 'C'},
    {nombre: 'Agua', precio: 0.1, formato: 'Kg', marca: 'Ag'},
    {nombre: 'Bacalao', precio: 0.1, formato: 'Kg', marca: 'B'},
    {nombre: 'Papel Higiénico', precio: 0.1, formato: 'Kg', marca: 'PH'},
    {nombre: 'Detergente', precio: 0.1, formato: 'Kg', marca: 'DT'},
    {nombre: 'Bolsa Residuo', precio: 0.1, formato: 'Kg', marca: 'BR'},
    {nombre: 'Panetone', precio: 0.1, formato: 'Kg', marca: 'PNT'},
    {nombre: 'Lechuga', precio: 0.1, formato: 'Kg', marca: 'L'},
    {nombre: 'Aceite', precio: 0.1, formato: 'Kg', marca: 'ACT'},
    {nombre: 'Vinagre', precio: 0.1, formato: 'Kg', marca: 'VNG'},
    {nombre: 'Pan', precio: 0.1, formato: 'Kg', marca: 'PAN'},
    {nombre: 'Galletas', precio: 0.1, formato: 'Kg', marca: 'GLLT'},
    {nombre: 'Humus', precio: 0.1, formato: 'Kg', marca: 'HM'},
    {nombre: 'Patatas', precio: 0.1, formato: 'Kg', marca: 'PF'},
    {nombre: 'Pasta', precio: 0.1, formato: 'Kg', marca: 'PST'},
    {nombre: 'Patatastatatatatatas', precio: 0.99, formato: 'Kg', marca: 'PATATA'},
    {nombre: 'Vinagre', precio: 0.1, formato: 'Kg', marca: 'VNG'},
    {nombre: 'Pan', precio: 0.1, formato: 'Kg', marca: 'PAN'},
    {nombre: 'Galletas', precio: 0.1, formato: 'Kg', marca: 'GLLT'},
    {nombre: 'Humus', precio: 0.1, formato: 'Kg', marca: 'HM'},
    {nombre: 'Patatas', precio: 0.1, formato: 'Kg', marca: 'PF'},
    {nombre: 'Pasta', precio: 0.1, formato: 'Kg', marca: 'PST'},
    {nombre: 'Patatastatatatatatas', precio: 0.99, formato: 'Kg', marca: 'PATATA'},
    
  ];

  constructor(private router: Router) { }

  getProducto() {
    return this.listProductos.slice();
  }

  eliminarProducto(index: number) {
    this.listProductos.splice(index, 1);
  }

  agregarProducto(producto: Producto) {
    this.listProductos.unshift( producto ); 
    if (this.listProductos.length > 0) {
      this.router.navigate(['/dashboard']);
    
    }   
    
        
  }

  
}
