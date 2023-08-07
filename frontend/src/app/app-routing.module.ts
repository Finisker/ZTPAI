import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./characters-menu/characters-menu.component";
import {RacesMenuComponent} from "./races-menu/races-menu.component";
import {ProfessionsMenuComponent} from "./professions-menu/professions-menu.component";
import {SkillsMenuComponent} from "./skills-menu/skills-menu.component";
import {AbilitiesMenuComponent} from "./abilities-menu/abilities-menu.component";

const routes: Routes = [
  { path: 'characters', component: MainMenuComponent},
  { path: 'races', component: RacesMenuComponent},
  { path: 'professions', component: ProfessionsMenuComponent},
  { path: 'skills', component: SkillsMenuComponent},
  { path: 'abilities', component: AbilitiesMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
