import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {AuthRequest} from "../../_models/authRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthRequest;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.authRequest = new AuthRequest();
  }

  onSubmit() {
    console.log("onSubmit");
    console.log(this.authRequest);
    this.authService.authenticate(this.authRequest).subscribe(response => {
      console.log("respone");
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      localStorage.setItem('id', response.uniqueId);
      this.router.navigate(['/main']);
    });
  }
}
