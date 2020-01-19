import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  currentUser: string;

  searchPlayer = null;
  resultsDisplayed = false;
  resultsID = null;
  results = [];
  hostChannels: any;
  successfullyAdded = false;
  requestOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  searchForm: FormGroup;
  channelSelection: FormGroup;


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

    // Loads the IFrame Player API code asynchronously
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Wait for initializations before loading
    setTimeout(() => this.initPlayer(), 1000);

    this.displayTitle('ixkoVwKQaJg');
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

  displayTitle(id){
    this.http.get('/watch?v='+id+'&format=json').subscribe((data:any) => {
    });
  }

  updatePlayerState(event){
    if(event.data == window['YT'].PlayerState.CUED){
      this.resultsID = this.searchPlayer.getPlaylist();
      let i;
      let nbTitles = 0;
      for(i=0; i<this.resultsID.length; i++){
        this.http.get('/watch?v='+this.resultsID[i]+'&format=json').subscribe((data:any) => {
          let num = data.html.split("embed/")[1].split("?feature")[0];
          this.results[nbTitles] = {id: num, title: data.title};
          nbTitles = nbTitles + 1;
        });
      }
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
      setTimeout(() => this.successfullyAdded = false, 3000);
    });
  }

  saveForUser(songID){
    this.http.put('/api/v1/playlists/playlist', {host: this.currentUser, songID: songID}).subscribe((data : any) => {
      this.successfullyAdded = true;
      setTimeout(() => this.successfullyAdded = false, 3000);
    });
  }

  sendToPreview(index){
    let id = this.results[index].id;
    this.searchPlayer.loadVideoById(id);
    this.searchPlayer.playVideo();
    this.searchPlayer.unMute();
    this.searchPlayer.setVolume(100);
  }

}
