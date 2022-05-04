import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
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
    this.topics$ = this.forumService.getLasts(); 
  }


}
