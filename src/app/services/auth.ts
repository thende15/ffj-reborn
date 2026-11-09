import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/api';
  token: string | null = null;

  register(payload: any) {
    payload.account_creation = new Date()
    payload.profiles[0].first_seen_at = new Date()
    payload.profiles[0].updated_at = new Date()
    return this.http.post(`${this.apiUrl}/auth/register`, payload)
  }

  login(payload: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, payload)
  }

  //In the login function on the login page, this is being called
  saveToken(token: string){
    this.token = token;
    localStorage.setItem('jwt', token)
  }
  
  loadToken() {
    const token = localStorage.getItem('jwt');
    if(token) this.token = token;
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('jwt')
    localStorage.removeItem('profile')
  }
}
