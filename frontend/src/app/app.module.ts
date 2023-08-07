import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalCharacterMiniatureComponent } from './functional-character-miniature/functional-character-miniature.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { CharactersMenuComponent } from './characters-menu/characters-menu.component';
import { RacesMenuComponent } from './races-menu/races-menu.component';
import { ProfessionsMenuComponent } from './professions-menu/professions-menu.component';
import { TalentsMenuComponent } from './talents-menu/talents-menu.component';
import { AbilitiesMenuComponent } from './abilities-menu/abilities-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RaceSummaryComponent } from './race-summary/race-summary.component';
import { AttributesMenuComponent } from './attributes-menu/attributes-menu.component';
import { AttributeSummaryComponent } from './attribute-summary/attribute-summary.component';
import { AbilitySummaryComponent } from './ability-summary/ability-summary.component';
import { ProffessionSummaryComponent } from './proffession-summary/proffession-summary.component';
import { TalentSummaryComponent } from './talent-summary/talent-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalCharacterMiniatureComponent,
    SearchBarComponent,
    FilterMenuComponent,
    UserNavigationComponent,
    CharactersMenuComponent,
    RacesMenuComponent,
    ProfessionsMenuComponent,
    TalentsMenuComponent,
    AbilitiesMenuComponent,
    TopBarComponent,
    RaceSummaryComponent,
    AttributesMenuComponent,
    AttributeSummaryComponent,
    AbilitySummaryComponent,
    ProffessionSummaryComponent,
    TalentSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
