import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/api';
  token: string | null = null;

  register(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, {email: email, password: password})
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/login`, {email: email, password: password})
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
  }
}
