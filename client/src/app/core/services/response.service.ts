import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Response } from "src/app/models/response.model";


@Injectable({
  providedIn: 'root'
})

export class ForumService {
  Responses!: Response[];

  constructor(private http: HttpClient){}

  getAllResponses(): Observable<Response[]>{
    return this.http.get<Response[]>(`http://localhost:3000/api/forum`);
  }

  getTopicById(topicId: number): Observable<Response>{
    return this.http.get<Response>(`http://localhost:3000/api/forum/${topicId}`);
  }
}