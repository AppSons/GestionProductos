import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = [];
  constructor() {
    this.grabar_localStorage(this.currentUser);
   }
  
  grabar_localStorage(usuario: any){
    let nameUser:string = usuario;
    localStorage.setItem('currentUser', usuario);
  }

  obtener_localStorage(){
    return localStorage.getItem('currentUser');
  }

  
}

