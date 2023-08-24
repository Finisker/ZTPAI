import {Attribute} from "./attribute";

export class Ability{
  name!: string;
  description!: string;
  attribute!: Attribute;
  specializations!: string;
  advanced!: boolean;
}
