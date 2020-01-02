import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SearchComponent } from './search/search.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  
  { path: 'auth', component: AuthComponent , data: {animation:'Auth'} },
  { path: 'auth/signup', component: SignupComponent , data: {animation:'Signup'} },
  { path: 'auth/login', component: LoginComponent , data: {animation:'Login'} },

  { path: 'players', component: PlayersComponent , data: {animation:'Players'} },
  { path: 'search', component: SearchComponent , data: {animation:'Search'} },
  { path: 'players/youtube', component: YoutubeComponent , data: {animation:'Youtube'} },
  { path: 'players/spotify', component: SpotifyComponent , data: {animation:'Spotify'} },
  { path: 'channels', component: ChannelsComponent , data: {animation:'Channels'}},
  { path: 'home', component: HomeComponent , data: {animation:'Home'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
