import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Response } from "src/app/models/response.model";


@Injectable({
  providedIn: 'root'
})

export class ResponseService {
  Responses!: Response[];

  constructor(private http: HttpClient){}

  getAllResponses(): Observable<Response[]>{
    return this.http.get<Response[]>(`http://localhost:3000/api/responses`);
  }

  getAllResponsesByTopicId(topicId: number): Observable<Response[]>{
    return this.http.get<Response[]>(`http://localhost:3000/api/responses/${topicId}`)
  }

  addResponse(formValue: { content: string, topicId: number, author: string}): Observable<Response>{
    return this.http.post<Response>(`http://localhost:3000/api/responses`, formValue)
  }
}