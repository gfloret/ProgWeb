import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from "@angular/common/http";


function tryLogin(email, password){
  return this.http.get('/api/v1/uniqueSongYoutube',);
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit(loginData){
    console.warn('Login form has been submitted', loginData);
    console.log(loginData);
    this.http.get('/api/v1/login', loginData.email).subscribe((data : any) => {});
  }
  

}
