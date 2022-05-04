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

  modifyUser(values: { nom: string, prenom: string, email: string }, userId: number): Observable<User>{
    console.log(values, userId)
    return this.http.get<User>(`http://localhost:3000/api/users/test2/${userId}`)
  }

  deleteUser(userId: number): Observable<User>{
    return this.http.delete<User>(`http://localhost:3000/api/users/${userId}`)
  }

  updateUser(values: { nom: string, prenom: string, email: string }, userId: Number): Observable<User>{
    return this.http.put<User>(`http://localhost:3000/api/users/${userId}`, values)
  }



}