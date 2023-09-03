import {Component, Input} from '@angular/core';
import {Talent} from "../../_models/talent";

@Component({
  selector: 'app-talent-summary',
  templateUrl: './talent-summary.component.html',
  styleUrls: ['./talent-summary.component.scss']
})
export class TalentSummaryComponent {
  @Input()
  talent: Talent = new Talent();
}
