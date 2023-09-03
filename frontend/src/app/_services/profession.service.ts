import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Profession} from "../_models/profession";

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  readonly url:string = "http://localhost:8080/api/v1/profession";
  constructor(private httpClient: HttpClient) { }

  getProfessions() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Profession[]>(this.url+"/all",{headers});
  }

}
