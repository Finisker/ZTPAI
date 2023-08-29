import { Component } from '@angular/core';
import {Ability} from "../../_models/ability";
import {AbilityService} from "../../_services/ability.service";

@Component({
  selector: 'app-abilities-menu',
  templateUrl: './abilities-menu.component.html',
  styleUrls: ['./abilities-menu.component.scss']
})
export class AbilitiesMenuComponent {
  abilities: Ability[]=[];

  constructor(private abilityService: AbilityService) {
  }

  getCharacters() {
    this.abilityService.getAbilities().subscribe(response => {
        this.abilities = response;
      }
    );
  }
}
