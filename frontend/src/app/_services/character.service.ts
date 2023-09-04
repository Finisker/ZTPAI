import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../_models/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly url:string = "http://localhost:8080/api/v1/characters";
  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    console.log("Character service");
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Character[]>(this.url+"/all",{headers});
  }

  deleteCharacter(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(this.url + "/deleteCharacter", { headers });
  }
}
