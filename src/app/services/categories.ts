import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/api';

  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`)
  }
}
