import { Component, OnInit, Inject } from '@angular/core';

import {  CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Columnas } from 'src/app/interfaces/columnas';

@Component({
  selector: 'app-draganddrop-tabla-dialog',
  templateUrl: './draganddrop-tabla-dialog.component.html',
  styleUrls: ['./draganddrop-tabla-dialog.component.css']
})
export class DraganddropTablaDialogComponent implements OnInit {
  columnas = [
    'Nombre',
    'Precio',
    'Formato',
    'Marca'
  ]
  /**Falla el event */
 // drop(event: CdkDragDrop<string[]>) {
 //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
 // }
    
  drop(event: Event)  {
    if (this.isDragDrop(event)) {
      moveItemInArray(this.columnas, event.previousIndex, event.currentIndex);
    }
  }
  isDragDrop(object: any): object is CdkDragDrop<string[]> {
    return 'previousIndex' in object;
  }


 
  
  constructor(public dialog: MatDialog,
              public dialogRefCol: MatDialogRef<DraganddropTablaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) _columnas: Columnas ) { }

  ngOnInit(): void {
  }

  
  cancelar() {
    this.dialogRefCol.close();
  }

  

}
