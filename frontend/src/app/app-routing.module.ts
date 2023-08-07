import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./characters-menu/main-menu.component";
import {
  FunctionalCharacterMiniatureComponent
} from "./functional-character-miniature/functional-character-miniature.component";

const routes: Routes = [
  { path: 'main', component: MainMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
