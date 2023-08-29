import {Component, Input} from '@angular/core';
import {Character} from "../../_models/character";

@Component({
  selector: 'app-functional-character-miniature',
  templateUrl: './functional-character-miniature.component.html',
  styleUrls: ['./functional-character-miniature.component.scss']
})
export class FunctionalCharacterMiniatureComponent {

  @Input()
  character: Character;

  constructor() {
    this.character = new Character();
  }

  // public openNewWindow(url:string , features:string): boolean{
  //   window.open(url,'popup',features);
  //   return false;
  // }

}
