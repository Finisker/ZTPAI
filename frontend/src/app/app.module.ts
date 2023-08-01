import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterMiniatureComponent } from './character-miniature/character-miniature.component';
import { CharacterTextSummaryComponent } from './character-text-summary/character-text-summary.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMiniatureComponent,
    CharacterTextSummaryComponent,
    CharactersListComponent,
    FunctionalCharacterMiniatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
