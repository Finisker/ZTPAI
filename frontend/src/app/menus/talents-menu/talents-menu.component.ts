import { Component } from '@angular/core';
import {Talent} from "../../_models/talent";
import {TalentService} from "../../_services/talent.service";

@Component({
  selector: 'app-talents-menu',
  templateUrl: './talents-menu.component.html',
  styleUrls: ['./talents-menu.component.scss']
})
export class TalentsMenuComponent {
  talents: Talent[]=[];

  constructor(private talentService: TalentService) {
  }

  ngOnInit() {

    this.talentService.getTalents().subscribe(response => {
      this.talents = response;
    });

  }
}
