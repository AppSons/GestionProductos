import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedComponent } from './components/shared/shared.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { ConfirmDialogComponent } from './components/dashboard/confirm-dialog/confirm-dialog.component';
import { DraganddropTablaDialogComponent } from './components/dashboard/draganddrop-tabla-dialog/draganddrop-tabla-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SharedComponent,
    LoginComponent,
    InicioComponent,
    FooterComponent,
    NavbarComponent,
    ProductosComponent,
    ConfirmDialogComponent,
    DraganddropTablaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
