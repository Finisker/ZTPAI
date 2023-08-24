import {SocialClass} from "./socialClass";
import {Ability} from "./ability";
import {Attribute} from "./attribute";
import {Talent} from "./talent";

export class Profession{
  name!: string;
  path!: string;
  description! : string;
  socialStatus!: string;
  equipment!: string;
  level! : number;
  socialClass!: SocialClass;
  abilitySet!: Ability[];
  talentSet!: Talent[];
  attributeSet!: Attribute[];
}
