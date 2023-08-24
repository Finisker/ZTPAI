import {Character} from "./character";

export class User {
  login!: string;
  email!: string;
  password!: string;
  nickname! : string;
  characterSet! : Character[];
}
