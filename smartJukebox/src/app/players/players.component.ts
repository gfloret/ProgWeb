import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

  public YT : any;
  mainPlayer = null;
  songs = [];
  currentUser: string;
  listeningMusic = false;

  constructor(private router: Router, private http:HttpClient) {
    this.currentUser = localStorage.getItem('userName');
    if(this.currentUser === null){
      router.navigate(['/auth']);
    }
  }

  ngOnInit() {

    // Loads the IFrame Player API code asynchronously
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Wait for initializations before loading
    setTimeout(() => this.initPlayer(), 1000);

    this.http.get('/api/v1/playlists/playlist?host='+this.currentUser).subscribe((ids: any) => {
      let i;
      for(i=0; i<ids.ids.length; i++){
        this.http.get('/watch?v='+ids.ids[i]+'&format=json').subscribe((titles:any) => {
          this.songs[i] = {id: ids.ids[i], title: titles.title};
        });
      }
    });

  }

  initPlayer() {
    this.mainPlayer = new window['YT'].Player('mainPlayer', {
      height: '480',
      width: '720',
      videoId: '',
      events: {
      }
    });
  }

  sendToPreview(index){
    this.listeningMusic = true;
    var id = this.songs[index];
    this.mainPlayer.loadVideoById(id);
    this.mainPlayer.playVideo();
    this.mainPlayer.unMute();
    this.mainPlayer.setVolume(100);
  }

  delete(index){
    this.http.delete('/api/v1/playlists/playlist?songID='+this.songs[index]+'&host='+this.currentUser).subscribe((data: any) => {
      this.http.get('/api/v1/playlists/playlist?host='+this.currentUser).subscribe((data: any) => {
        this.songs = data.ids;
      });
    });
  }

}
