import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategories } from '../interfaces/icategories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/api';

  getCategories(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/categories`);
  }
}
