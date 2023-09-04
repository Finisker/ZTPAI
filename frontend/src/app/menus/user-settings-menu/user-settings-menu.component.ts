import { Component } from '@angular/core';
import {User} from "../../_models/user";

import {UserService} from "../../_services/user.service";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-user-settings-menu',
  templateUrl: './user-settings-menu.component.html',
  styleUrls: ['./user-settings-menu.component.scss']
})
export class UserSettingsMenuComponent {

  loggedUser: User = new User();

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    let nickname = localStorage.getItem('nickname');
    let email = localStorage.getItem('email');

    if(nickname){
      this.loggedUser.nickname = nickname;
    }

    if(email){
      this.loggedUser.email = email;
    }
  }


}
