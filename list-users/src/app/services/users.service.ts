import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Items, UserResponse } from '../models/users-response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from '../models/users-table.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}


  getListUser(
    user: string,
    sort: string,
    per_page: number,
    page: number,
    order: string,
  ): Observable<{ total: number, items: Users[] }> {

    const params = new HttpParams()
    .set('sort', sort)
    .set('order', order)
    .set('page', page.toString())
    .set('per_page', per_page.toString());
    
    return this.http.get<UserResponse>(`${environment.endpoint}search/users?q=${user}%20in:login`, { params }).pipe(
      map((res) => {
        let users = [];
        const response = res.items;

        users = response.map((items: Users) => ({
          login: items.login,
          profile: items.avatar_url,
          type: items.type,
        }))

        return {
          total: res.total_count,
          items: users,
        }

      })
    )
  }
}
