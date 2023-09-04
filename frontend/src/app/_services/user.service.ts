import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly url:string = "http://localhost:8080/api/v1/users";
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.get(this.url + "/all", { headers });
  }

  setNewEmail(newEmail: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.url + "/setNewEmail/" + newEmail, { headers });
  }

  setNewPassword(oldPassword: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
    return this.httpClient.post<any>(this.url + "/setNewPassword", body, { headers });
  }

  deleteAccount(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.delete<any>(this.url + "/deleteAccount", { headers });
  }
}
