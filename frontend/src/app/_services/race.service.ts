import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Race} from "../_models/race";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  readonly url:string = "http://localhost:8080/api/v1/races";
  constructor(private httpClient: HttpClient) { }

  getRaces() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Race[]>(this.url+"/all",{headers});
  }

}
