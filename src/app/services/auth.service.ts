import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // frontend
  userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
 

  // backend
  private ROOT_URL = "http://localhost:4000/api/user";
  constructor(private http:HttpClient,
              private jwtHelper:JwtHelperService) {
    // this.loadUserInfo();
   }

  // loadUserInfo(){
  //   const userdata = this.userInfo.getValue();
  //   if(!userdata){

  //     const accesstoken = localStorage.getItem("token")
      
  //     if(accesstoken){
  //       const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
  //       const data ={
  //         access_token : accesstoken,
  //         // refresh_token : localStorage.getItem("refresh_token"),
  //         username : decryptedUser.username,
  //         userid : decryptedUser.sub,
  //         tokenExpiration : decryptedUser.exp,
  //         // For admin
  //         user_type:localStorage.getItem("user_type"),
  //       };
  //       // next is observable for deliverd value
  //       this.userInfo.next(data);
  //     }
  //   }
  // }
  

  // userLogin(userPayload : any){
  //   console.log(userPayload);
  //   const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
  //   // const refreshtoken = "dummy";
  //   console.log("heyy token "+localStorage.getItem('token'));
  //   // by me for admin
  //   const userType = "Emp";

  //   localStorage.setItem("access_token",accesstoken);
  //   // localStorage.setItem("refresh_token",refreshtoken);
  //   // localStorage.setItem("token",res.token)
  //   // ny me for admin
  //   localStorage.setItem("user_type",userType);

  //   const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
  //   console.log(decryptedUser);

  //   const data ={
  //     access_token : accesstoken,
  //     // refresh_token : refreshtoken,
  //     username : decryptedUser.username,
  //     userid : decryptedUser.sub,
  //     tokenExpiration : decryptedUser.exp,
  //     // by me for admin
  //     user_type:userType
  //   };
  //   this.userInfo.next(data);
   
  // }

  clearSession(){
   localStorage.removeItem('token')
 
   // by me for admin
   localStorage.removeItem('user_type')
  }

  // backend
  register(user: any){
    return this.http.post<any>(`${this.ROOT_URL}/register`,user)
  }

  login(user: any){
    return this.http.post<any>(`${this.ROOT_URL}/login`,user)
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // for authentication by me
  isAuthenticated():boolean{
    const token =localStorage.getItem('token') as string;
    return !this.jwtHelper.isTokenExpired(token);
  }
  
}
