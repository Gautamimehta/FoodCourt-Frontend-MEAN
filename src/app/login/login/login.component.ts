import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private router : Router,
              private formbuilder:FormBuilder,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password :['',[Validators.required, Validators.minLength(6)]]
    });
  }
  
  get h(){
    return this.loginForm.controls;}
  
  // onSubmit(){
  //   if(this.loginForm.value.email==='test@test.com' &&
  //      this.loginForm.value.password==='123456'){
  //       //  alert("Welcome Admin !!");
  //        this.router.navigate(['/dashboard']);
  //        this.authService.userLogin(this.loginForm);
  //        localStorage.setItem("user_type","admin");
  //      }
  // }

  // backend admin
  //  onSubmit(){
  //   if(this.loginForm.value.email==='gautamimehta17@gmail.com' &&
  //      this.loginForm.value.password==='123456'){
  //       alert("Welcome Admin !!");
  //        this.authService.login(this.loginForm.value).subscribe(res=>{

  //       localStorage.setItem("token",res.token)
  //       this.loginForm.reset(); 
  //       this.router.navigate(['/home']);
  //     })
  //      }
  // }

  // backend
  userLogin(){
    this.submitted=true;
    if(this.loginForm.invalid) return 
    if(this.loginForm.valid){
      if(this.loginForm.value.email==='gautamimehta17@gmail.com' &&
           this.loginForm.value.password==='123456'){
             alert("Welcom Admin")
              this.authService.login(this.loginForm.value).subscribe(res=>{
              console.log(res);
              localStorage.setItem("token",res.token)
              localStorage.setItem("User","admin")
              this.loginForm.reset();  
              this.router.navigate(['/home']);
            }
            )}
          else{
            this.authService.login(this.loginForm.value).subscribe(res=>{
              console.log(res);
              localStorage.setItem("token",res.token)
              localStorage.setItem("User","user")
              this.loginForm.reset();  
              this.router.navigate(['/home']);
            },
            err=>{
              console.log(err);
            })}
           
     
    }

  }

 

}
