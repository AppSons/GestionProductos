import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



import { Producto } from 'src/app/interfaces/productos';


import { ProductosService } from '../../services/productos.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ProductosComponent } from './productos/productos.component';
import { DraganddropTablaDialogComponent } from './draganddrop-tabla-dialog/draganddrop-tabla-dialog.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  

  listProductos: Producto[] = [];

  displayedColumns: string[] = ['nombre', 'precio', 'formato', 'marca', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  
  

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private _productservice: ProductosService, 
              public dialog: MatDialog, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
 
  ngOnInit(): void {
    this.cargarProductos();
    this.intlPaginator();
    
  }

  cargarProductos() {
    this.listProductos = this._productservice.getProducto();
    this.dataSource = new MatTableDataSource(this.listProductos);
  }

 
  
  /** Llamamos al modal de confirmación para borrar un dato */

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      width: '450px',
      height: '210px',
      
    });

    dialogRef.afterClosed().subscribe(_confirmado => {
      if (_confirmado){
        this.eliminarProducto(index);
      }
      
    });
  }

  /** Llamamos al procedimiento de borrado de datos,  en base de datos reales utilizaríamos el id del producto */
  eliminarProducto(index: number) {    
    this._productservice.eliminarProducto(index);
    this.cargarProductos();
  }

   /** Llamamos al Modal de Carga de un nuevo Producto  */
  openDialogProd(): void {
    const dialogRefProd = this.dialog.open(ProductosComponent,{     
    });

    dialogRefProd.afterClosed().subscribe(producto => {
      if (producto != undefined) {
        this.agregarProducto(producto);      
      }   
      this.cargarProductos();   
    });
  }    
 
  /** Llamamos open Dialog de reordenamiento de Columnas */
  openDialogColumns(): void {
    const dialogRefCol = this.dialog.open(DraganddropTablaDialogComponent,{ 
      width: '700px',
      height: '500px',
      data: {columnas: this.displayedColumns}    
    });
    dialogRefCol.afterClosed().subscribe(columnas => {
       if (columnas != undefined) {
          this.displayedColumns = columnas;      
        }   
        this.cargarProductos();    
    });
  }
  

  agregarProducto(producto: Producto) {
    this._productservice.listProductos.unshift( producto );
    this.cargarProductos();
    if (this.listProductos.length > 0) {      
      this.router.navigate(['/dashboard']);
    }
    
  }

   /** Configuración de _Intl Mat-Paginator */ 
  intlPaginator(){
    this.paginator._intl.itemsPerPageLabel = 'Ítems por página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior'; 
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length} ítems`;
    }
    
  }
}
