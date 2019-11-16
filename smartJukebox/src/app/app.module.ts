import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { SearchComponent } from './search/search.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SpotifyComponent } from './spotify/spotify.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full'},
  { path: 'players', component: PlayersComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    SearchComponent,
    YoutubeComponent,
    SpotifyComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
