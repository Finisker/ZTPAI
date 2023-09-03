import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit{
  private _currentPage : string = "";
  private _imgPath : string = "";


  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(){
    const now = new Date();
    const today = now.toUTCString().slice(0,3);

    this._imgPath = "assets/images/daily_wallpaper/wallpaper" + today + ".jpg";
  }

  get currentPage(): string {
    let currentPageStorage = sessionStorage.getItem("currentPage");
    return currentPageStorage ? currentPageStorage : "";
  }

  public setCurrentPage(currentPage:string) : void{
    this._currentPage = currentPage;

  }

  get imgPath(){
    return this._imgPath;
  }

  public handleCurrentPageChange(currentPage:string) : void{

    let result = this._currentPage != currentPage ? currentPage : "";
    this.setCurrentPage(result);
    sessionStorage.setItem("currentPage",this._currentPage);
  }

  logout() {

    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    });

  }
}
