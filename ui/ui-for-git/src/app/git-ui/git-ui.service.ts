import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUiService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api/';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _httpClient: HttpClient) { }

  getUser() {
    return this._httpClient.get(`${this.REST_API}user`);
  };

  getRepo() {
    return this._httpClient.get(`${this.REST_API}repo`);
  };

  getUserRepo(username: string) {
    return this._httpClient.get(`${this.REST_API}repo-list?username=${username}`)
  }

  getUserDetails(username: string) {
    return this._httpClient.get(`${this.REST_API}specified-user?username=${username}`)
  }
}
