import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterMiniatureComponent } from './character-miniature/character-miniature.component';
import { CharacterTextSummaryComponent } from './character-text-summary/character-text-summary.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMiniatureComponent,
    CharacterTextSummaryComponent,
    CharactersListComponent,
    FunctionalCharacterMiniatureComponent,
    ContextMenuComponent,
    SearchBarComponent,
    FilterMenuComponent,
    UserNavigationComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
