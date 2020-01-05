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
  incorrectPassword = false;

  // Forms
  newChannelForm: FormGroup;
  searchForm: FormGroup;
  privateSearchForm: FormGroup;
  postChatMessage: FormGroup;
  passwordForm: FormGroup;

  // Variables to stock current data
  currentUser: string;
  publicChannels;
  hostChannels;
  memberChannels;
  currentChannel;
  currentChannelMessages;
  interval;
  channelToTest;
  showModal = false;
  

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) { 

    this.currentUser = localStorage.getItem('userName');

    if(this.currentUser === null){
      router.navigate(['/auth']);
    }

    this.newChannelForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      password: ''
    });
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
    this.privateSearchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });

    this.postChatMessage = this.formBuilder.group({
      message: ['', Validators.required]
    });
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });

  }


  ngOnInit() {
    this.loadPersonnalView();
    this.loadMainView();
    this.interval = setInterval(() => {
      if (this.individualView && (this.currentChannelMessages != null)){
        this.loadCurrentChannelMessages();
      }
    }, 3000);
  }


  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get password() { return this.newChannelForm.get('password'); }


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

  loadCurrentChannelMessages(){
    this.http.get('/api/v1/channel/messages?channel='+this.currentChannel.name).subscribe((data: any) => {
      this.currentChannelMessages = data.messages;
    });
    console.log(this.currentChannelMessages);
  }

  openIndividualView(channel){
    this.currentChannel = channel;
    this.loadCurrentChannelMessages();
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

  onPost(messageContent){
    const dataToSend = {messageContent: messageContent.message, author: this.currentUser, channelName: this.currentChannel.name};
    this.http.post('/api/v1/channel/message', dataToSend).subscribe((data: any) => {
      this.currentChannelMessages = data.messages;
    });
    this.loadCurrentChannelMessages();
  }

  search(toSearch){
    let keywords = toSearch.search;
    keywords = keywords.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(keywords !== ""){
      this.http.get('/api/v1/channel/publicSearch?keywords='+keywords+'&user='+this.currentUser).subscribe((data:any) => {
        this.publicChannels = data;
      });
    }
  }

  privateSearch(toSearch){
    let keywords = toSearch.search;
    keywords = keywords.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(keywords !== ""){
      this.http.get('/api/v1/channel/privateSearch?keywords='+keywords+'&user='+this.currentUser).subscribe((data:any) => {
        this.memberChannels = data;
        this.hostChannels = null;
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
  
  checkPassword(res){
    this.http.get('/api/v1/channel/checkPassword?name='+this.channelToTest.name+'&password='+res.password).subscribe((data:any) => {
      if(!data){
        this.incorrectPassword = true;
      }
      else{
        this.showModal = false;
        this.openIndividualView(this.channelToTest);
      }
    });    
  }

}
