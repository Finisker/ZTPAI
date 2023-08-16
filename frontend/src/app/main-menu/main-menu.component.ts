import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  private _currentPage : string = "";

  get currentPage(): string {
    let currentPageStorage = sessionStorage.getItem("currentPage");
    return currentPageStorage ? currentPageStorage : "";
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
