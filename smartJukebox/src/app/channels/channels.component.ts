import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(private router: Router) { 
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }
  }

  ngOnInit() {
  }

}
