import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  passwordMinLength = 6;
  takenUsername = false;
  takenEmail = false;
  signupError = false;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) {
    if(localStorage.getItem('userName') !== null){
      router.navigate(['/home']);
    }
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailConf: ['', [Validators.required, Validators.email, this.isIdenticalToEmail('email')]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      passwordConf: ['', [Validators.required, Validators.minLength(this.passwordMinLength), this.isIdenticalToPassword('password')]]
    });
   }

  isIdenticalToPassword (passwordToCompare: string) {
    let password: FormControl;
    let passwordConf: FormControl;
    return function matchPreviousPassword (control: FormControl) {
      if (!control.parent) { return null; } // If there is nothing to compare yet
      if (!passwordConf) {
        passwordConf = control;
        password = control.parent.get(passwordToCompare) as FormControl;
        password.valueChanges.subscribe(() => { // Each time the value of the passwordConf control is changed, we recalculate the validation state
          passwordConf.updateValueAndValidity();
        });
      }
      if (password.value !== passwordConf.value) {
        return { matchPrevious: true };
      }
    }
  }

  isIdenticalToEmail (emailToCompare: string) {
    let email: FormControl;
    let emailConf: FormControl;
    return function matchPreviousEmail (control: FormControl) {
      if (!control.parent) { return null; }
      if (!emailConf) {
        emailConf = control;
        email = control.parent.get(emailToCompare) as FormControl;
        email.valueChanges.subscribe(() => {
          emailConf.updateValueAndValidity();
        });
      }
      if (email.value !== emailConf.value) {
        return { matchPrevious: true };
      }
    }
  }

  get username() { return this.signupForm.get('username'); }
  get email() { return this.signupForm.get('email'); }
  get emailConf() { return this.signupForm.get('emailConf'); }
  get password() { return this.signupForm.get('password'); }
  get passwordConf() { return this.signupForm.get('passwordConf'); }

  onSubmit(userData: any) {
    this.http.post('/api/v1/signup', userData).subscribe((data : any) => {
      this.takenUsername = false;
      this.takenEmail = false;
      this.signupError = false;
      switch (data.signup){
        case "error":
          this.signupError = true;
          break;
        case "takenUsername":
          this.takenUsername = true;
          break;
        case "takenEmail":
          this.takenEmail = true;
          break;
        case "success":
          this.router.navigate(['/auth/login']);
          break;
      }
    });
  }

  ngOnInit() {}

}
