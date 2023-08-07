import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersMenuComponent} from "./characters-menu/characters-menu.component";
import {RacesMenuComponent} from "./races-menu/races-menu.component";
import {ProfessionsMenuComponent} from "./professions-menu/professions-menu.component";
import {SkillsMenuComponent} from "./skills-menu/skills-menu.component";
import {AbilitiesMenuComponent} from "./abilities-menu/abilities-menu.component";
import {AttributesMenuComponent} from "./attributes-menu/attributes-menu.component";

const routes: Routes = [
  { path: 'characters', component: CharactersMenuComponent},
  { path: 'races', component: RacesMenuComponent},
  { path: 'professions', component: ProfessionsMenuComponent},
  { path: 'skills', component: SkillsMenuComponent},
  { path: 'abilities', component: AbilitiesMenuComponent},
  { path: 'attributes', component: AttributesMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
