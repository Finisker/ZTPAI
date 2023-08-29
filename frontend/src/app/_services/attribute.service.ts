import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Attribute} from "../_models/attribute";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  readonly url:string = "http://localhost:8080/api/v1/attributes";
  constructor(private httpClient: HttpClient) { }

  getAttributes() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Attribute[]>(this.url+"/all",{headers});
  }

}
