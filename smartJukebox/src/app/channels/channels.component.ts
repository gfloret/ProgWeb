import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, NavigationEnd } from '@angular/router';
import { divAnimation } from './channels-animations';

@Component({
  selector: 'app-channels',
  animations: [divAnimation],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})

export class ChannelsComponent implements OnInit {

  // ===== States =====
  takenName = false;
  isPublic = true;
  creatingNewChannel = false;
  mainView = true;
  individualView = false;
  isHost = false;
  listeningMusic = false;
  incorrectPassword = false;
  currentIndex = 0;

  // ===== Forms =====
  newChannelForm: FormGroup;
  searchForm: FormGroup;
  privateSearchForm: FormGroup;
  postChatMessage: FormGroup;
  passwordForm: FormGroup;

  // ===== Variables to stock current data =====
  requestOptions = {	
	headers: new HttpHeaders({ 	
	'Access-Control-Allow-Origin':'*'	
	})	
  };
  currentUser: string;
  publicChannels;
  hostChannels;
  memberChannels;
  currentChannel;
  currentChannelMessages;
  interval;
  channelToTest;
  showModal = false;
  public YT : any;
  mainPlayer = null;
  songs = [];



  // ===== Inits =====

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

    this.router.events.subscribe((e) =>{
      if (e instanceof NavigationEnd) {
        this.individualView = false;
      }
    })

  }

  ngOnInit() {
    this.loadPersonnalView();
    this.loadMainView();
    this.interval = setInterval(() => {
      if (this.individualView){
        let chatHistory = document.getElementById("chatBox");
        chatHistory.scrollTop = chatHistory.scrollHeight;
        this.loadCurrentChannelMessages();
      }
    }, 1000);
	setInterval(this.changeMusicIfNecessary.bind(this), 1000);
  }

  initPlayerView() {
    this.mainPlayer = new window['YT'].Player('mainPlayer', {
      height: '480',
      width: '720',
      videoId: '',
      events: {
      }
    });
  }
  
  changeMusicIfNecessary(){
	  if(this.mainPlayer.getDuration()>0 && this.mainPlayer.getCurrentTime()>=this.mainPlayer.getDuration()){
		  this.currentIndex = (this.currentIndex+1)%this.songs.length;
		  this.sendToPreview(this.currentIndex);
	  }
  }

  initPlayer() {

    // Loads the IFrame Player API code asynchronously
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.http.get('/api/v1/playlists/channelplaylist?channelName='+this.currentChannel.name).subscribe((ids: any) => {
      let i;
      let numTitles = 0;
      for(i=0; i<ids.playlist.length; i++){
        this.http.get('/watch?v='+ids.playlist[i]+'&format=json').subscribe((titles:any) => {
          let num = titles.html.split("embed/")[1].split("?feature")[0];
          this.songs[numTitles] = {id: num, title: titles.title};
          numTitles = numTitles + 1;
        });
      }
    });

    // Wait for initializations before loading
    setTimeout(() => this.initPlayerView(), 1000);
  }

  get name() { return this.newChannelForm.get('name'); }
  get description() { return this.newChannelForm.get('description'); }
  get password() { return this.newChannelForm.get('password'); }



  // ===== View controllers =====

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
    this.individualView = true;
  }

  openIndividualView(channel){

    this.songs = [];

    this.currentChannel = channel;
    this.loadCurrentChannelMessages();
    this.initPlayer();

    if (channel.host === this.currentUser){
      this.isHost = true;
    } else { // Add user to channel members if not already in or host
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



  // ===== Buttons and forms controllers =====

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

  sendToPreview(index){
	this.currentIndex = index;
    this.listeningMusic = true;
    let id = this.songs[index].id;
    this.mainPlayer.loadVideoById(id);
    this.mainPlayer.playVideo();
    this.mainPlayer.unMute();
    this.mainPlayer.setVolume(100);
  }

  deleteSong(index){
    this.http.delete('/api/v1/playlists/channelplaylist?songID='+this.songs[index]+'&channelName='+this.currentChannel.name).subscribe((data: any) => {
      this.http.get('/api/v1/playlists/channelplaylist?channelName='+this.currentChannel.name).subscribe((data: any) => {
        let i;
        let numTitles = 0;
		this.songs = [];
        for(i=0; i<ids.playlist.length; i++){
          this.http.get('https://smart-jukebox-proxy.herokuapp.com/?url=http://www.youtube.com/watch?v='+ids.playlist[i]+'&format=json').subscribe((titles:any) => {
            let num = titles.html.split("embed/")[1].split("?feature")[0];
            this.songs[numTitles] = {id: num, title: titles.title};
            numTitles = numTitles + 1;
          });
        }
      });
    });
  }

}
