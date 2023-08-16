import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit{
  private _currentPage : string = "";
  private _imgPath : string = "";

  ngOnInit(){
    const now = new Date();
    const today = now.toUTCString().slice(0,3);

    this._imgPath = "assets/wallpaper" + today + ".jpg";
  }

  get currentPage(): string {
    let currentPageStorage = sessionStorage.getItem("currentPage");
    return currentPageStorage ? currentPageStorage : "";
  }

  get imgPath(): string {
    return this._imgPath;
  }

  public setCurrentPage(currentPage:string) : void{
    this._currentPage = currentPage;

  }

  public handleCurrentPageChange(currentPage:string) : void{

    let result = this._currentPage != currentPage ? currentPage : "";
    this.setCurrentPage(result);
    sessionStorage.setItem("currentPage",this._currentPage);
  }
}
