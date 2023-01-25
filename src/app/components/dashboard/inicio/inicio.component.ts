import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos : Producto [] = [];
  cantidad  : number = 0;

  constructor(private _prodService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this._prodService.getProducto();
    this.cantidad = this.productos.length;
    console.log(this.cantidad);
  }

  









}
