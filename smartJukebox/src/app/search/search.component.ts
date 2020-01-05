import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public YT : any;
  private searchPlayer = null;
  resultsDisplayed = false;
  resultsReady = false;
  results = null;
  hostChannels;

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
    console.log(this);
    
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    setTimeout(() => this.initPlayer(), 1000);

  }

  // ==============================

  initPlayer(){
    this.searchPlayer = new window['YT'].Player('searchPlayer', {
      height: '400',
      width: '800',
      videoId: '',
      events: {
        'onStateChange' : this.displayResults.bind(this)
      }
    });
  }

  displayResults(event){
    if(event.data == window['YT'].PlayerState.CUED){
      this.results = this.searchPlayer.getPlaylist();
      this.searchPlayer.playVideo();
      return;
    }
    else if(event.data != window['YT'].PlayerState.PLAYING)
      return;
    if(this.resultsDisplayed === false)
      this.searchPlayer.pauseVideo();
  }

  displayTitle(id){
    this.http.get('/title/'+id+'&format=json').subscribe((data: any) => {
      console.log(data);
    });
  }

  // ==============================

  onSubmit(searchContent: any){
    this.resultsDisplayed = false;
    this.searchPlayer.cuePlaylist({
      'listType': "search",
      'list': searchContent.title
    });
    setTimeout(() => this.resultsDisplayed = true, 1000);
  }

  sendToChannel(channel: any, songID: any){
    this.http.put('/api/v1/channel/addSong', {songID: songID, channel: channel.channel, host: this.currentUser}).subscribe((data : any) => {});
  }

  saveForUser(songID){
    console.log(songID);
    this.http.put('/api/v1/user/playlist', {host: this.currentUser, songID: songID}).subscribe((data : any) => {});
  }

  sendToPreview(index){
    var id = this.results[index];
    this.searchPlayer.loadVideoById(id);
    this.searchPlayer.playVideo();
    this.searchPlayer.unMute();
    this.searchPlayer.setVolume(100);
  }

}
