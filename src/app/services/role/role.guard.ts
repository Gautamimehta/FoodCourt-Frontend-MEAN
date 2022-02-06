import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let Role = localStorage.getItem("User");
    if(Role=="admin"){
      console.log(Role);
      return true;

    }
    alert("You dont have admin rights")
    console.log(Role);
    return false;
  }
  
  
}
