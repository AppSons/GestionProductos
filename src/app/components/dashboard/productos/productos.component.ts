import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  formato: any[] = ['Envasado', 'Kilo', 'Litro', 'Unidad'];
  form: FormGroup;
    
  

  constructor(private _fb: FormBuilder, private _productservice: ProductosService, public dialog: MatDialog,
             public dialogRefProd: MatDialogRef<ProductosComponent>,
              @Inject(MAT_DIALOG_DATA) public producto: Producto) {

    this.form = this._fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      formato: ['', Validators.required],
      marca: ['', Validators.required],
    });
    }

  ngOnInit() {
  }

  cancelar() {
    this.dialogRefProd.close();
  }

  
  agregarP() {   
    const producto: Producto = {
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      formato: this.form.value.formato,
      marca: this.form.value.marca,
    }
    this._productservice.agregarProducto(producto);
    this.dialogRefProd.close();
    
    
  }
  
  


  
}
