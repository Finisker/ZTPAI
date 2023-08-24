import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalCharacterMiniatureComponent } from './menus/functional-character-miniature/functional-character-miniature.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './menus/filter-menu/filter-menu.component';
import { CharactersMenuComponent } from './menus/characters-menu/characters-menu.component';
import { RacesMenuComponent } from './menus/races-menu/races-menu.component';
import { ProfessionsMenuComponent } from './menus/professions-menu/professions-menu.component';
import { TalentsMenuComponent } from './menus/talents-menu/talents-menu.component';
import { AbilitiesMenuComponent } from './menus/abilities-menu/abilities-menu.component';
import { RaceSummaryComponent } from './menus/race-summary/race-summary.component';
import { AttributesMenuComponent } from './menus/attributes-menu/attributes-menu.component';
import { AttributeSummaryComponent } from './menus/attribute-summary/attribute-summary.component';
import { AbilitySummaryComponent } from './menus/ability-summary/ability-summary.component';
import { ProffessionSummaryComponent } from './menus/proffession-summary/proffession-summary.component';
import { TalentSummaryComponent } from './menus/talent-summary/talent-summary.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { UserSettingsMenuComponent } from './menus/user-settings-menu/user-settings-menu.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { CharacterWindowComponent } from './character-menagement/character-window/character-window.component';
import { CharacterCreationComponent } from './character-menagement/character-creation/character-creation.component';

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
