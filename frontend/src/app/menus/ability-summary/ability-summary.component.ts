import {Component, Input} from '@angular/core';
import {Ability} from "../../_models/ability";

@Component({
  selector: 'app-ability-summary',
  templateUrl: './ability-summary.component.html',
  styleUrls: ['./ability-summary.component.scss']
})
export class AbilitySummaryComponent {
  @Input()
  ability: Ability = new Ability();

  public test(){
    console.log(this.ability.name);
  }
}
