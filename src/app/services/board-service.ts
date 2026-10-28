import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  http = inject(HttpClient)
  apiUrl = 'http://localhost:3000/api';

  getBoard(param: number): Observable<Object> {
    return this.http.get(`${this.apiUrl}/board/${param}`);
  }
}
