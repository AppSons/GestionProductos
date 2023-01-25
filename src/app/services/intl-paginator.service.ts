import { Injectable, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Injectable({
  providedIn: 'root'
})
export class IntlPaginatorService {

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor() { }


   /** Configuración de _Intl Mat-Paginator */ 
tradPaginator(){
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
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
}
}


