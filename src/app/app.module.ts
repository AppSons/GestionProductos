import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ConfirmDialogComponent } from './components/dashboard/confirm-dialog/confirm-dialog.component';
//
import { DraganddropTablaDialogComponent } from './components/dashboard/draganddrop-tabla-dialog/draganddrop-tabla-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  entryComponents: [
    ConfirmDialogComponent,    
   // ProductoDialogComponent,
    DraganddropTablaDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DragDropModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
