import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(`${this.url}users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}users/${id}`);
  }
}
