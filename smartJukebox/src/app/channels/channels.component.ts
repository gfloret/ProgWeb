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

  // States
  takenName = false;
  isPublic = true;
  creatingNewChannel = false;
  mainView = true;
  individualView = false;
  isHost = false;

  newChannelForm: FormGroup;
  currentUser: string;
  publicChannels;
  userChannels;
  currentChannel;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) { 

    this.currentUser = localStorage.getItem('userName');

    if(this.currentUser === null){
      router.navigate(['/auth']);
    }

    this.newChannelForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      visibility: 'true'
    });

  }

  toggleMainView(){
    this.mainView = !this.mainView;
  }

  toggleCreationForm(){
    this.creatingNewChannel = !this.creatingNewChannel;
  }

  backToMainView(){
    this.individualView = false;
  }

  openIndividualView(channel){
    this.individualView = true;
    this.currentChannel = channel;
    if (channel.host === this.currentUser){
      this.isHost = true;
    } else {
      // Rejoint le channel
    }
  }

  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get visibility() { return this.newChannelForm.get('visibility'); }

  onSubmit(channelData: any){
    const dataToSend = {channelData: channelData, currentUser: this.currentUser}
    this.http.post('/api/v1/channel', dataToSend).subscribe((data:any) => {
      this.takenName = false;
      if (data.channel === "takenName"){
        this.takenName = true;
      } else {
        this.creatingNewChannel = false;
        this.loadPersonnalView();
        this.currentChannel = data.channel;
        console.log(this.currentChannel);
        this.individualView = true;
      }
    });
  }

  ngOnInit() {
    this.loadMainView();
    this.loadPersonnalView();
  }

  loadMainView(){
    this.http.get('/api/v1/channel/publicchannels?host='+this.currentUser).subscribe((data:any) => {
      this.publicChannels = data;
    });
  }
  loadPersonnalView(){
    this.http.get('/api/v1/channel/userchannels?host='+this.currentUser).subscribe((data: any) => {
      this.userChannels = data;
    });
  }

}
