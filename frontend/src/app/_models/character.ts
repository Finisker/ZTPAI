import {Race} from "./race";
import {Profession} from "./profession";
import {Attribute} from "./attribute";
import {Talent} from "./talent";
import {Ability} from "./ability";

export class Character {
  name!: string;
  experience!: number;
  race!: Race;
  profession! : Profession;
  attributeMap!: Map<Attribute,number>;
  talentMap!: Map<Talent,number>;
  abilityMap!: Map<Ability,number>;
}
