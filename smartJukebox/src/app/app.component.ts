import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService],
  animations: [
    
  ]
})



export class AppComponent {
  constructor(private router: Router, private _sharedService: SharedService) {
    _sharedService.changeEmitted$.subscribe(text => {
        console.log(text);
        this.userName = localStorage.getItem('userName');

    });
  }
  title = 'smartJukebox';
  userName = localStorage.getItem('userName');


  disconnect(){
    console.log("deconnexion");
    localStorage.clear();
    this.router.navigate(['/auth/login']);
    this.userName = null;
  }
}
