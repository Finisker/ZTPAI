import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";

const routes: Routes = [
  { path: 'main', component: MainMenuComponent},
  { path: 'user', component: UserSettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
