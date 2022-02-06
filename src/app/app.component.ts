import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Cart } from './shared/models/Cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  constructor(private authservice :AuthService,
              private router : Router ){}

  isLoggedin(){
    return localStorage.getItem('token');
  }

  logout(){
    this.authservice.clearSession();
    // location.reload();
    this.router.navigate(['/login']);
    console.log("gi")
  }
 
}
