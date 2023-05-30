import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_User } from '../helpers/utilities';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signupUser(Data:any) {
    return this.http.post<signupView>(API_User, Data);
  }
}
