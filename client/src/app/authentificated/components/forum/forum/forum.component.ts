import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  topics$!: Observable<Topic[]>;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.topics$ = this.forumService.getAllTopics(); 
  }

}
