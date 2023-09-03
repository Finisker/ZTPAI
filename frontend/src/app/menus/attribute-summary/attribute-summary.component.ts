import {Component, Input} from '@angular/core';
import {Attribute} from "../../_models/attribute";

@Component({
  selector: 'app-attribute-summary',
  templateUrl: './attribute-summary.component.html',
  styleUrls: ['./attribute-summary.component.scss']
})
export class AttributeSummaryComponent {
  @Input()
  attribute: Attribute = new Attribute();
}
