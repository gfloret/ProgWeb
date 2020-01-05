import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public YT : any;
  private firstSearch = true;
  private resultsDisplayed = false;
  private searchPlayer = null;
  private results = null;

  constructor(private http:HttpClient, private router: Router) {
    if(localStorage.getItem('userName') === null){
      router.navigate(['/auth']);
    }
   }

  ngOnInit() {
    console.log(this);
    (<HTMLButtonElement>document.getElementById("searchYoutubeButton")).addEventListener("click", this.search.bind(this));
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window['onYouTubeIframeAPIReady'] = () => this.initPlayer();

    document.addEventListener('click', function(e){
      if(e.target && e.target.id.split("_")[0].localeCompare("addUser")===0) {
        const index = parseInt(e.target.id.split('_')[1], 10);
        this.addSongUser(index);
      }else if(e.target && e.target.id.split("_")[0].localeCompare("addChannel")===0) {
        const index = parseInt(e.target.id.split('_')[1], 10);
        this.addSongChannel(index);
      }else if(e.target && e.target.id.split('_')[0].localeCompare("preview")===0){
        const index = parseInt(e.target.id.split('_')[1], 10);
        this.preview(index);
      }
    }.bind(this));

    this.http.get('/api/v1/channel/hostchannels?host='+localStorage.getItem('userName')).subscribe((data: any) => {
      data.forEach(e => {
        var op = document.createElement('option');
        op.setAttribute('value', e.name);
        op.innerHTML = e.name;
        document.getElementById('channel-select').append(op);
      });
    });
  }

  preview(index){
    var id = this.results[index];
    this.searchPlayer.loadVideoById(id);
    this.searchPlayer.playVideo();
    this.searchPlayer.unMute();
    this.searchPlayer.setVolume(100);
  }

  addSongChannel(index){
    var select = (<HTMLSelectElement>document.getElementById('channel-select'));
    var channel = select.options[select.selectedIndex].innerHTML;
    var id = this.results[index];
    this.http.put('/api/v1/channel/addSong', {songID: id,
                                                        channel: channel,
                                                        host: localStorage.getItem('userName')})
      .subscribe((data : any) => {});
  }

  addSongUser(index){
    var id = this.results[index];
    this.http.put('/api/v1/user/playlist', {host: localStorage.getItem('userName'), songID: id}).subscribe((data : any) => {});
  }

  initPlayer(){
    this.searchPlayer = new window['YT'].Player('searchPlayer', {
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
    this.searchPlayer.mute();
    (<HTMLButtonElement>document.getElementById("searchYoutubeButton")).disabled = false;
  }

  search(){
    this.resultsDisplayed = false;
    this.searchPlayer.cuePlaylist({
      'listType': "search",
      'list': (<HTMLInputElement> document.getElementById("keyWords")).value
    });
  }

  removeAllChild(){
    var node = document.getElementById("results");
    node.innerHTML = "";
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
    if(this.firstSearch === false)
      this.removeAllChild();
    this.firstSearch = false;
    var i;
    for(i=0; i<this.results.length; i++){
      var elem = document.createElement("div");
      elem.setAttribute("class", "elem");
      elem.setAttribute("id", i);

      var img = document.createElement("div");
      img.setAttribute("class", "img");
      var thumbnail = document.createElement("img");
      thumbnail.setAttribute("src", "https://img.youtube.com/vi/"+this.results[i]+"/0.jpg");
      img.appendChild(thumbnail);
      elem.appendChild(img);

      this.displayTitle(this.results[i], elem);

      var addUser = document.createElement("button");
      addUser.setAttribute("id", "addUser_"+i);
      var plus = document.createElement("i");
      plus.setAttribute("class", "fa fa-plus-circle");
      addUser.appendChild(plus);
      elem.appendChild(addUser);

      var preview = document.createElement("button");
      preview.setAttribute("id", "preview_"+i);
      var play = document.createElement("i");
      play.setAttribute("class", "fa fa-play-circle");
      preview.appendChild(play);
      elem.appendChild(preview);

      var addChannel = document.createElement("button");
      addChannel.setAttribute("id", "addChannel_"+i);
      addChannel.innerHTML = "Add to Channel";
      elem.appendChild(addChannel);

      document.getElementById("results").appendChild(elem);
    }
    this.resultsDisplayed = true;
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
