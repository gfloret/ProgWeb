import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(private router: Router) { 
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }
  }

  ngOnInit() {
  }

}
