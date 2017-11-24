import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { UserFinderService } from './user-finder.service';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
