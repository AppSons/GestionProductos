import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DashboardComponent } from '../dashboard.component';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  addProducto: any;

  constructor(public dialog: MatDialog,
              private _dashboard: DashboardComponent ) { }

  ngOnInit(): void {
  }

  openAddProductDialog() {
    this.addProducto = this._dashboard.openDialogProd();
    
  }

}
