import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { divAnimation } from './search-animations';

@Component({
  selector: 'app-search',
  animations: [divAnimation],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public YT : any;
  private searchPlayer = null;
  resultsDisplayed = false;
  results = null;
  resultsTitles = null;
  hostChannels: any;
  successfullyAdded = false;

  searchForm: FormGroup;
  channelSelection: FormGroup;

  currentUser: string;


  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) {

    this.currentUser = localStorage.getItem('userName');

    if(this.currentUser === null){
      router.navigate(['/auth']);
    }

    this.searchForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
    this.channelSelection = this.formBuilder.group({
      channel: ['', Validators.required]
    });

  }

  ngOnInit() {
    
    this.http.get('/api/v1/channel/hostchannels?host='+this.currentUser).subscribe((data: any) => {
      this.hostChannels = data;
    });

    // This code loads the IFrame Player API code asynchronously
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Wait for initializations before loading
    setTimeout(() => this.initPlayer(), 1000);
  }

  initPlayer(){
    this.searchPlayer = new window['YT'].Player('searchPlayer', {
      height: '400',
      width: '800',
      videoId: '',
      events: {
        'onStateChange' : this.updatePlayerState.bind(this)
      }
    });
  }

  updatePlayerState(event){
    if(event.data == window['YT'].PlayerState.CUED){
      this.results = this.searchPlayer.getPlaylist();
      this.searchPlayer.playVideo();
    }
  }

  onSubmit(searchContent: any){
    this.resultsDisplayed = false;
    this.searchPlayer.cuePlaylist({
      'listType': "search",
      'list': searchContent.title
    });
    setTimeout(() => this.resultsDisplayed = true, 1000);
  }

  sendToChannel(channel: any, songID: any){
    this.http.put('/api/v1/channel/addSong', {songID: songID, channel: channel.channel, host: this.currentUser}).subscribe((data : any) => {
      this.successfullyAdded = true;
    });
    setTimeout(() => this.successfullyAdded = false, 1500);
  }

  saveForUser(songID){
    this.http.put('/api/v1/playlists/playlist', {host: this.currentUser, songID: songID}).subscribe((data : any) => {
      this.successfullyAdded = true;
    });
    setTimeout(() => this.successfullyAdded = false, 1500);
  }

  sendToPreview(index){
    var id = this.results[index];
    this.searchPlayer.loadVideoById(id);
    this.searchPlayer.playVideo();
    this.searchPlayer.unMute();
    this.searchPlayer.setVolume(100);
  }

}
