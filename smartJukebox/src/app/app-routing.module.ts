import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SearchComponent } from './search/search.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full'},
  { path: 'players', component: PlayersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'players/youtube', component: YoutubeComponent },
  { path: 'players/spotify', component: SpotifyComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
