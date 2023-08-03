import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterMiniatureComponent } from './character-miniature/character-miniature.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterMiniatureComponent,
    FunctionalCharacterMiniatureComponent,
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
