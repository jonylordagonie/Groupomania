import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/user.model";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(
    private http: HttpClient
  ){}
  private token!: string;

  register(formValue: { nom: string, prenom: string, email: string, password: string }): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/api/users`, formValue)
  }

  login(formValue: {email: string, password: string }): Observable<User> {
      return this.http.post<User>(`http://localhost:3000/api/users/login`, formValue)
    }

  getToken(): string {
    return this.token;
  }
}
