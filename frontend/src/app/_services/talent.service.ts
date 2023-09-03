import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Talent} from "../_models/talent";

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  readonly url:string = "http://localhost:8080/api/v1/talent";
  constructor(private httpClient: HttpClient) { }

  getTalents() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Talent[]>(this.url+"/all",{headers});
  }

}
