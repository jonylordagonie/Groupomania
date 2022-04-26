import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/core/services/forum.service';
import { ResponseService } from 'src/app/core/services/response.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  @Input() topic!: Topic;
  responses$!: Observable<Response[]>


  constructor(private forumService: ForumService,
    private router: Router,
    private responseService: ResponseService) { }

  ngOnInit(): void {
  }
  
  onViewTopic() {
    this.router.navigateByUrl(`forum/${this.topic.id}`);
  }

}
