import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  private playerOne = null;
  public YT : any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.initPlayer();
  }

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  initPlayer() {
    this.playerOne = new window['YT'].Player('player1', {
      height: '500',
      width: '500',
      videoId: '',
      events: {
        'onReady': this.onPlayerReady.bind(this)
      }
    });
  }

  onPlayerReady(event) {
    this.http.get('/api/v1/uniqueSongYoutube').subscribe((data: any) => {
        this.playerOne.loadVideoById(data.id_video);
        this.playerOne.setVolume(100);
        this.playerOne.playVideo();
        this.http.delete('/api/v1/uniqueSongYoutube').subscribe((data: any) => {});
      },
      err => {
        console.log(err);
      });
  }

}
