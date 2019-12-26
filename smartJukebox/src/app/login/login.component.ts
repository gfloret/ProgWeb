import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
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
    this.http.get('/api/v1/login',loginData).subscribe((data: any) => {});
  }
  
  ngOnInit() {}

}
