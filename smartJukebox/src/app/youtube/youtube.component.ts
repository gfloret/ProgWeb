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
  private songs = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.initPlayer();

    document.addEventListener('click', function(e){
      if(e.target && e.target.id.split("_")[0].localeCompare("play")===0) {
        const index = parseInt(e.target.id.split('_')[1], 10);
        this.playerOne.loadVideoById(this.songs[index]);
        this.playerOne.setVolume(100);
        this.playerOne.unMute();
        this.playerOne.playVideo();
      }else if(e.target && e.target.id.split("_")[0].localeCompare("deleteSong")===0) {
        const index = parseInt(e.target.id.split('_')[1], 10);
        console.log(localStorage.getItem('userName'));
        this.http.delete('/api/v1/user/playlist?songID='+this.songs[index]+'&host='+localStorage.getItem('userName'))
          .subscribe((data: any) => {});
      }
    }.bind(this));

    this.refresh();
  }

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  initPlayer() {
    this.playerOne = new window['YT'].Player('player1', {
      height: '500',
      width: '500',
      videoId: '',
      events: {
      }
    });
  }

  refresh(){
    document.getElementById('songs').innerHTML = '';
    this.http.get('/api/v1/user/playlist?host='+localStorage.getItem('userName')).subscribe((data: any) => {
      this.songs = data.ids;
      this.displayResults();
    });
  }

  displayResults(){
    var i;
    for(i=0; i<this.songs.length; i++){
      var elem = document.createElement("div");
      elem.setAttribute("class", "elem");
      elem.setAttribute("id", i);

      var img = document.createElement("div");
      img.setAttribute("class", "img");
      var thumbnail = document.createElement("img");
      thumbnail.setAttribute("src", "https://img.youtube.com/vi/"+this.songs[i]+"/0.jpg");
      img.appendChild(thumbnail);
      elem.appendChild(img);

      this.displayTitle(this.songs[i], elem);

      var preview = document.createElement("button");
      preview.setAttribute("id", "play_"+i);
      var play = document.createElement("i");
      play.setAttribute("class", "fa fa-play-circle");
      preview.appendChild(play);
      elem.appendChild(preview);

      var deleteSong = document.createElement("button");
      deleteSong.setAttribute("id", "deleteSong_"+i);
      deleteSong.innerHTML = "Delete song";
      elem.appendChild(deleteSong);

      document.getElementById("songs").appendChild(elem);
    }
  }

  displayTitle(id, elem){
    this.http.get('/title/'+id+'&format=json').subscribe((data: any) => {
      var title = document.createElement("div");
      title.setAttribute("class", "titre");
      title.innerHTML = data.title;
      elem.appendChild(title);
    });
  }

}
