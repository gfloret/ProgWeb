import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { format } from 'url';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  signupForm;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) { 
    this.signupForm = this.formBuilder.group({
      username: '',
      email: '',
      emailConf: '',
      password: '',
      passwordConf: ''
    });
   }

  onSubmit(userData) {
    console.warn('Signup form has been submitted', userData);
    console.log(userData);
    this.http.post('/api/v1/signup', userData.username).subscribe((data : any) => {});
  }

  ngOnInit() {}

}
