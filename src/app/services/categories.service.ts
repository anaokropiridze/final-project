import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Categories/GetAll';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const url = this.apiUrl;

    return this.http.get<any>(url);
  }
}
