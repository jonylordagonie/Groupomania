import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  topics$!: Observable<Topic[]>;

  constructor(private forumService: ForumService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUser().subscribe(
      ok => console.log(ok),
      () => {
        this.router.navigateByUrl('auth/login')
      }
    )
    this.topics$ = this.forumService.getAllTopics(); 
  }

}
