import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_UserView } from '../helpers/utilities';

@Injectable({
  providedIn: 'root'
})
export class UserViewService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get(API_UserView);
  }
}
