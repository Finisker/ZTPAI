import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../_models/character";

@Component({
  selector: 'app-functional-character-miniature',
  templateUrl: './functional-character-miniature.component.html',
  styleUrls: ['./functional-character-miniature.component.scss']
})
export class FunctionalCharacterMiniatureComponent {

  @Output() displayCharacterEvent = new EventEmitter<Character>();

  @Input()
  character: Character;

  constructor() {
    this.character = new Character();
  }

  displayCharacter(){
    console.log("Functional miniature" + this.character);
    this.displayCharacterEvent.next(this.character);
  }
}
