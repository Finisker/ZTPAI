import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../_models/character";
import {CharacterService} from "../../_services/character.service";

@Component({
  selector: 'app-characters-menu',
  templateUrl: './characters-menu.component.html',
  styleUrls: ['./characters-menu.component.scss']
})
export class CharactersMenuComponent {

  @Output() addCharacterEvent = new EventEmitter<void>();

  @Output() displayCharacterEvent = new EventEmitter<Character>();

  characters: Character[] = [];


  constructor(private characterService: CharacterService) {
    this.getCharacters();
  }

  getCharacters() {

    let uniqueId = localStorage.getItem("id");
    if(uniqueId) {
      this.characterService.getCharactersByUniqUserId(uniqueId).subscribe(response => {
          this.characters = response;
        }
      );
    }
  }

  addCharacter(): void{
    this.addCharacterEvent.next();
  }

  displayCharacter(character: Character){
    console.log("character menu" + character);
    this.displayCharacterEvent.next(character);
  }

}
