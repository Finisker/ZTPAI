import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { CharactersMenuComponent } from './characters-menu/characters-menu.component';
import { RacesMenuComponent } from './races-menu/races-menu.component';
import { ProfessionsMenuComponent } from './professions-menu/professions-menu.component';
import { TalentsMenuComponent } from './talents-menu/talents-menu.component';
import { AbilitiesMenuComponent } from './abilities-menu/abilities-menu.component';
import { RaceSummaryComponent } from './race-summary/race-summary.component';
import { AttributesMenuComponent } from './attributes-menu/attributes-menu.component';
import { AttributeSummaryComponent } from './attribute-summary/attribute-summary.component';
import { AbilitySummaryComponent } from './ability-summary/ability-summary.component';
import { ProffessionSummaryComponent } from './proffession-summary/proffession-summary.component';
import { TalentSummaryComponent } from './talent-summary/talent-summary.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UserSettingsMenuComponent } from './user-settings-menu/user-settings-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharacterWindowComponent } from './character-window/character-window.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalCharacterMiniatureComponent,
    SearchBarComponent,
    FilterMenuComponent,
    CharactersMenuComponent,
    RacesMenuComponent,
    ProfessionsMenuComponent,
    TalentsMenuComponent,
    AbilitiesMenuComponent,
    RaceSummaryComponent,
    AttributesMenuComponent,
    AttributeSummaryComponent,
    AbilitySummaryComponent,
    ProffessionSummaryComponent,
    TalentSummaryComponent,
    MainMenuComponent,
    UserSettingsMenuComponent,
    LoginComponent,
    RegisterComponent,
    CharacterWindowComponent,
    CharacterCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
