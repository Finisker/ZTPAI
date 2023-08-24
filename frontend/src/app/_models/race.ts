import {Ability} from "./ability";
import {Talent} from "./talent";
import {Profession} from "./profession";
import {Attribute} from "./attribute";

export class Race {
  name!: string;
  description!: string;
  abilitySet!: Ability[];
  talentSet!: Talent[];
  professionSet!: Profession[];
  talentChoiceMap!: Map<Talent,Talent>;
  attributeMap!: Map<Attribute,number>;
}
