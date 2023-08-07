import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { MainMenuComponent } from './characters-menu/characters-menu.component';
import { RacesMenuComponent } from './races-menu/races-menu.component';
import { ProfessionsMenuComponent } from './professions-menu/professions-menu.component';
import { SkillsMenuComponent } from './skills-menu/skills-menu.component';
import { AbilitiesMenuComponent } from './abilities-menu/abilities-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalCharacterMiniatureComponent,
    SearchBarComponent,
    FilterMenuComponent,
    UserNavigationComponent,
    MainMenuComponent,
    RacesMenuComponent,
    ProfessionsMenuComponent,
    SkillsMenuComponent,
    AbilitiesMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
