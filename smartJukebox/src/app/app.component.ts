import { Component } from '@angular/core';
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
  animations: [
    
  ]
})

export class AppComponent {
  title = 'smartJukebox';
  connected = false;

  refresh(){
    if (localStorage.getItem('userName') !== null) {
      this.connected = true;
    }
  }
}
