import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  topics$!: Observable<Topic[]>;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.topics$ = this.forumService.getAllTopics(); 
  }


}
