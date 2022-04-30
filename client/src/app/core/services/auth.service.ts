import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/user.model";
import { map, Observable } from "rxjs";

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'user-info'

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

  getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

  getUser(){
    const user = sessionStorage.getItem(USER_KEY);
    return JSON.parse(user!)
  }

  setToken(res: any) {
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.setItem(TOKEN_KEY, res.token);
  }

  setUser(res: any) {
    console.log(res)
    const user = {
    id: res.userId, 
    nom: res.nom,
    prenom: res.prenom,
    email: res.email,
    role: res.role,
  }
    sessionStorage.removeItem(USER_KEY)
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  logout() {
    sessionStorage.clear()
  }

}
