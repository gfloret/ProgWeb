import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  @Output() connectEvent = new EventEmitter<string>();

  userExist = true;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) {}

  onSubmit(loginData){
    console.warn('Login form has been submitted', loginData);
    console.log(loginData);
    this.http.get('/api/v1/login?username='+loginData.username+'&password='+loginData.password).subscribe((data: any) => {
      if(!data.accountInfo){
        this.userExist = false;
      }else{
        this.userExist = true;
        localStorage.setItem('userName', data.accountInfo.username);
        this.connectEvent.emit(null);
        this.router.navigate(['/players']);
      }
    });
  }

  ngOnInit() {
    this.usernameCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = this.formBuilder.control('', Validators.required);

    this.loginForm = this.formBuilder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });

  }

}
