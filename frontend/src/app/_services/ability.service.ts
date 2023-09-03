import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ability} from "../_models/ability";

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  readonly url:string = "http://localhost:8080/api/v1/ability";
  constructor(private httpClient: HttpClient) { }

  getAbilities() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Ability[]>(this.url+"/all",{headers});
  }

}
