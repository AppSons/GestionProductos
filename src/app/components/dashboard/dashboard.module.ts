import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { FooterComponent } from './footer/footer.component';

import { DraganddropTablaDialogComponent } from './draganddrop-tabla-dialog/draganddrop-tabla-dialog.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    FooterComponent,
    DraganddropTablaDialogComponent
    
    
  ],
  
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
    
  ]
})
export class DashboardModule { }
