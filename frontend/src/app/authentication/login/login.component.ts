import { Component } from '@angular/core';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private userService: UserService
  ) {

  }

  onSubmit() {
    this.userService.getAllUsers().subscribe(response => {
      console.log(response);
    })
  }
}
