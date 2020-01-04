import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { divAnimation } from './channels-animations';

@Component({
  selector: 'app-channels',
  animations: [divAnimation],
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
  searchForm: FormGroup;
  currentUser: string;
  publicChannels;
  hostChannels;
  memberChannels;
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
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });

  }

  toggleMainView(){
    this.mainView = !this.mainView;
    this.loadPersonnalView();
    this.loadMainView();
  }

  toggleCreationForm(){
    this.creatingNewChannel = !this.creatingNewChannel;
  }

  backToMainView(){
    this.individualView = false;
  }

  openIndividualView(channel){
    this.currentChannel = channel;
    if (channel.host === this.currentUser){
      this.isHost = true;
    } else {
      this.http.get('/api/v1/channel/ismemberofchannel?user='+this.currentUser+'&channel='+this.currentChannel.name).subscribe((data:any) => {
        if (data.member === false){
          const dataToSend = {userToAdd: this.currentUser, currentChannel: this.currentChannel};
          this.http.put('/api/v1/channel/addmember', dataToSend).subscribe((data:any) => {
            this.currentChannel = data.channel;
          });
        }
      });
      this.isHost = false;
    }
    this.individualView = true;
  }

  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get visibility() { return this.newChannelForm.get('visibility'); }

  onSubmit(channelData: any){
    let toSearch = channelData.name + " " + channelData.description + " " + this.currentUser;
    toSearch = toSearch.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const dataToSend = {channelData: channelData, currentUser: this.currentUser, toSearch: toSearch}
    this.http.post('/api/v1/channel/create', dataToSend).subscribe((data:any) => {
      this.takenName = false;
      if (data.channel === "takenName"){
        this.takenName = true;
      } else {
        this.creatingNewChannel = false;
        this.loadPersonnalView();
        this.currentChannel = data.channel;
        this.isHost = true;
        this.individualView = true;
      }
    });
  }

  ngOnInit() {
    this.loadPersonnalView();
    this.loadMainView();
  }

  search(toSearch){
    let keywords = toSearch.search;
    keywords = keywords.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(keywords);
    if(keywords !== ""){
      this.http.get('/api/v1/channel/search?keywords='+keywords).subscribe((data:any) => {
        this.publicChannels = data;
      });
    }
  }

  loadMainView(){
    this.http.get('/api/v1/channel/publicchannels?user='+this.currentUser).subscribe((data:any) => {
      this.publicChannels = data;
    });
  }

  loadPersonnalView(){
    this.http.get('/api/v1/channel/hostchannels?host='+this.currentUser).subscribe((data: any) => {
      this.hostChannels = data;
    });
    this.http.get('/api/v1/channel/memberchannels?member='+this.currentUser).subscribe((data: any) => {
      this.memberChannels = data;
    });
  }
  
  deleteChannel(){
    this.http.delete('/api/v1/channel/deletechannel?channelToDelete='+this.currentChannel.name).subscribe((data:any) => {});
    this.loadPersonnalView();
    this.loadMainView();
    this.individualView = false;
  }

  leaveChannel(){
    const dataToSend = {channel: this.currentChannel.name, member: this.currentUser};
    this.http.put('/api/v1/channel/leavechannel', dataToSend).subscribe((data:any) => {
      this.currentChannel = data.channel;
    });    
    this.loadPersonnalView();
    this.loadMainView();
    this.individualView = false;
  }

}
