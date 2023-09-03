import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SocialClass} from "../_models/socialClass";

@Injectable({
  providedIn: 'root'
})
export class SocialClassService {

  readonly url:string = "http://localhost:8080/api/v1/socialClass";
  constructor(private httpClient: HttpClient) { }

  getSocialClasses() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<SocialClass[]>(this.url+"/all",{headers});
  }

}
