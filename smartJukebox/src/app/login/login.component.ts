import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  userExist = true;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {}

  onSubmit(loginData){
    console.warn('Login form has been submitted', loginData);
    console.log(loginData);
    this.http.get('/api/v1/login?email='+loginData.email+'&password='+loginData.password).subscribe((data: any) => {
      if(!data.accountInfo){
        this.userExist = false;
      }else{
        this.userExist = true;
      }
    });
  }

  ngOnInit() {
    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = this.formBuilder.control('', Validators.required);

    this.loginForm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });

  }

}
