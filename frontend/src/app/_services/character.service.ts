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

  getCharactersByUniqUserId(uniqueId: string) {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    var url = this.url+"/getCharacters/" + uniqueId;
    console.log(url);
    return this.httpClient.get<Character[]>(url,{headers});
  }

  deleteCharacter(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(this.url + "/deleteCharacter", { headers });
  }
}
