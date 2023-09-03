import { Component } from '@angular/core';
import {Attribute} from "../../_models/attribute";
import {AttributeService} from "../../_services/attribute.service";

@Component({
  selector: 'app-attributes-menu',
  templateUrl: './attributes-menu.component.html',
  styleUrls: ['./attributes-menu.component.scss']
})
export class AttributesMenuComponent {
  attributes: Attribute[]=[];

  constructor(private attributeService: AttributeService) {
  }

  ngOnInit() {

    this.attributeService.getAttributes().subscribe(response => {
      this.attributes = response;
    });

  }

}
