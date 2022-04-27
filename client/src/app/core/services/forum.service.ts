import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Topic } from "src/app/models/topic.model";

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  Topics!: Topic[];

  constructor(private http: HttpClient){}

  getAllTopics(): Observable<Topic[]>{
    return this.http.get<Topic[]>(`http://localhost:3000/api/forum`);
  }

  getTopicById(topicId: number): Observable<Topic>{
    return this.http.get<Topic>(`http://localhost:3000/api/forum/${topicId}`);
  }

  addTopic(formValue: {title: string, content: string}): Observable<Topic>{
    return this.http.post<Topic>(`http://localhost:3000/api/forum`, formValue)
  }

  changeTopicResponses(topicId: number): Observable<Topic> {
    return this.http.put<Topic>(`http://localhost:3000/api/forum/${topicId}`, topicId);
  }

}