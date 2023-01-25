import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  userConnected!: string | null;
  connected = false ;

  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userConnected = this.userService.obtener_localStorage();
    if(this.userConnected === ''){
      this.connected = false;
      console.log(this.connected);
      console.log(this.userConnected)
    }else{
      this.connected = true;
      console.log(this.connected);
      console.log(this.userConnected)
    };
  }

  clearStorage() {
    localStorage.clear();
    this.connected = false;
    this.userConnected === '';
    console.log(this.connected);
    this.router.navigate(['/inicio']);
  }
}
