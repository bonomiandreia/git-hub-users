import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserResponse } from '../models/users-response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from '../models/users-table.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }


  getListUser(): Observable<{ total: number, items: Users}> {
    return this.http.get(`${environment.endpoint}search/users?q=foo%20in:login`).pipe(
      map((res: any) => {
        let users = [];
        const response = res.items;

        users = response.map((items: UserResponse) => ({
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
