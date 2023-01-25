import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private userService: UserService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    /**En sistemas reales haríamos un POST hacia un BackEnd y en base a la respuesta obtenida redireccionamos o mostramos error */
    if(usuario === 'admin' && password === '123'){
      // redireccionar a la pagina de inicio
      this.fakeLoading();
    }else{
      // mostrar mensaje de error
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Datos de acceso incorrectos', 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  fakeLoading(){
    this.loading = true;
    //console.log(this.loading);
    this.userService.grabar_localStorage(this.form.value.usuario);
    setTimeout(() => {
     
      // redireccionar a la pagina de lista de productos
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
