import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  private _currentPage : string = "characters";

  get currentPage(): string {
    return this._currentPage;
  }

  public setCurrentPage(currentPage:string) : void{
    this._currentPage = currentPage;
  }
}
