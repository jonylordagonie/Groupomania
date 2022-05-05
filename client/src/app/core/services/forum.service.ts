import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { Topic } from "src/app/models/topic.model";

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  Topics!: Topic[];

  constructor(private http: HttpClient){}

  getAllTopics(): Observable<Topic[]>{
    return this.http.get<Topic[]>(`http://localhost:3000/api/forum`).pipe(
      tap(results => results.sort(
        (a, b) => {
          if (a.updatedAt < b.updatedAt) {
            return 1;
          }
          if (a.updatedAt > b.updatedAt) {
            return -1;
          }
          return 0;
        }
      ))
    )
  }
  getLasts(): Observable<Topic[]>{
    return this.http.get<Topic[]>(`http://localhost:3000/api/forum`).pipe(
      map(results => {
        let i = 0
        if (results.length > 5) {
          i = results.length - 5
        } else {
          i = 0
        }
        const lastTopics = []
        for (let r = i;  r < results.length; r++){
          lastTopics.push(results[r])
        }
        return lastTopics;
      })
    )
  }


  getTopicById(topicId: number): Observable<Topic>{
    return this.http.get<Topic>(`http://localhost:3000/api/forum/${topicId}`);
  }

  addTopic(formValue: {title: string, content: string, author: string}): Observable<Topic>{
    return this.http.post<Topic>(`http://localhost:3000/api/forum`, formValue)
  }

  changeTopicResponses(topicId: number): Observable<Topic> {
    return this.http.put<Topic>(`http://localhost:3000/api/forum/${topicId}`, topicId);
  }

  deleteTopic(topicId: number): Observable<Topic> {
    return this.http.delete<Topic>(`http://localhost:3000/api/forum/${topicId}`);
  }

}