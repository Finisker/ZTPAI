import { Component } from '@angular/core';
import {Character} from "../../_models/character";
import {CharacterService} from "../../_services/character.service";

@Component({
  selector: 'app-characters-menu',
  templateUrl: './characters-menu.component.html',
  styleUrls: ['./characters-menu.component.scss']
})
export class CharactersMenuComponent {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {
  }

  getCharacters() {
      this.characterService.getCharacters().subscribe(response => {
          this.characters = response;
        }
      );
  }

}
