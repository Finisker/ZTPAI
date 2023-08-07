import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./characters-menu/characters-menu.component";
import {
  FunctionalCharacterMiniatureComponent
} from "./functional-character-miniature/functional-character-miniature.component";
import {RacesMenuComponent} from "./races-menu/races-menu.component";

const routes: Routes = [
  { path: 'characters', component: MainMenuComponent},
  { path: 'races', component: RacesMenuComponent},
  { path: 'professions', component: MainMenuComponent},
  { path: 'skills', component: MainMenuComponent},
  { path: 'abilities', component: MainMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
