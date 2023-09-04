import {Component, Input} from '@angular/core';
import {Character} from "../../_models/character";

@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrls: ['./character-window.component.scss']
})
export class CharacterWindowComponent {

  @Input() character: Character = new Character();

  test(){
    console.log("character window"+this.character);
  }
}
