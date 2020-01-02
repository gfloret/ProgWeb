import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-channels',
  animations: [
    trigger(
      'formAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})


export class ChannelsComponent implements OnInit {

  newChannelForm: FormGroup;
  takenName = false;
  isPublic = true;
  creatingNewChannel = false;
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) { 
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }

    this.newChannelForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      visibility: 'true',
    });

  }

  toggleCreationForm(){
    this.creatingNewChannel = !this.creatingNewChannel;
  }

  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get visibility() { return this.newChannelForm.get('visibility'); }

  onSubmit(channelData: any){
    this.http.post('/api/v1/channel', channelData).subscribe((data:any) => {
      this.takenName = false;
      if (data.channel === "takenName"){
        this.takenName = true;
      } else {
        this.creatingNewChannel = false;
        this.router.navigate(['/channels']);
      }
    });
  }

  ngOnInit() {
  }

}
