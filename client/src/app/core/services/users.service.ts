import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/models/user.model";
import { map, Observable, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users!: User;

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/api/users`);
  }

  getUserById(userId: number): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/api/users/${userId}`);
  }

  register(formValue: { nom: string, prenom: string, email: string, password: string }): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/api/users`, formValue)
  }

  login(formValue: {email: string, password: string }): Observable<User> {
        return this.http.post<User>(`http://localhost:3000/api/users`, { formValue })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user))
                return user;
            }));
    }

}