import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

let searchPlayer = null;
let results = null;

function preview(index){
  var id = this.results[index];
  searchPlayer.loadVideoById(id);
  searchPlayer.playVideo();
  searchPlayer.unMute();
  searchPlayer.setVolume(100);
}

function addSong(index){
  var id = results[index];
  this.http.post('/api/v1/uniqueSongYoutube', {id_video: id}).subscribe((data : any) => {});
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public YT : any;
  private firstSearch = true;
  private resultsDisplayed = false;

  constructor(private http:HttpClient, private router: Router) {
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }
   }

  ngOnInit() {
    console.log(this);
    (<HTMLButtonElement>document.getElementById("searchYoutubeButton")).addEventListener("click", this.search);
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.initPlayer();
  }

  initPlayer(){
    searchPlayer = new window['YT'].Player('searchPlayer', {
      height: '200',
      width: '400',
      videoId: '',
      events: {
        'onReady': this.enableAdding.bind(this),
        'onStateChange' : this.displayResults.bind(this)
      }
    });
  }

  enableAdding(event){
    searchPlayer.mute();
    (<HTMLButtonElement>document.getElementById("searchYoutubeButton")).disabled = false;
  }

  search(){
    this.resultsDisplayed = false;
    searchPlayer.cuePlaylist({
      'listType': "search",
      'list': (<HTMLInputElement> document.getElementById("keyWords")).value
    });
  }

  removeAllChild(){
    var node = document.getElementById("results");
    node.innerHTML = "";
  }

  displayResults(event){
    console.log("display");
    console.log(searchPlayer);
    if(event.data == window['YT'].PlayerState.CUED){
      results = searchPlayer.getPlaylist();
      searchPlayer.playVideo();
      return;
    }
    else if(event.data != window['YT'].PlayerState.PLAYING)
      return;
    if(this.resultsDisplayed === false)
      searchPlayer.pauseVideo();
    if(this.firstSearch === false)
      this.removeAllChild();
    this.firstSearch = false;
    var i;
    for(i=0; i<results.length; i++){
      var elem = document.createElement("div");
      elem.setAttribute("class", "elem");
      elem.setAttribute("id", i);

      var img = document.createElement("div");
      img.setAttribute("class", "img");
      var thumbnail = document.createElement("img");
      thumbnail.setAttribute("src", "https://img.youtube.com/vi/"+results[i]+"/0.jpg");
      img.appendChild(thumbnail);
      elem.appendChild(img);

      this.displayTitle(results[i], elem);

      var add = document.createElement("button");
      //add.type = "submit";
      add.setAttribute("onclick", "addSong("+i+")");
      var plus = document.createElement("i");
      plus.setAttribute("class", "fa fa-plus-circle");
      add.appendChild(plus);
      elem.appendChild(add);

      var preview = document.createElement("button");
      //add.type = "submit";
      preview.setAttribute("onclick", "preview("+i+")");
      var play = document.createElement("i");
      play.setAttribute("class", "fa fa-play-circle");
      preview.appendChild(play);
      elem.appendChild(preview);

      document.getElementById("results").appendChild(elem);
    }
    this.resultsDisplayed = true;
  }

  displayTitle(id, elem){
    console.log("displayTitle");
    console.log(searchPlayer);
    this.http.get('/title/'+id+'&format=json').subscribe((data: any) => {
      var title = document.createElement("div");
      title.setAttribute("class", "titre");
      title.innerHTML = data.title;
      elem.appendChild(title);
    });
  }

}
