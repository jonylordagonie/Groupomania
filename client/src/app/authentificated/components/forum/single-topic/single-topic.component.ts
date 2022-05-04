import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';
import { ResponseService } from 'src/app/core/services/response.service';
import { Response } from 'src/app/models/response.model';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent implements OnInit {
  topic$!: Observable<Topic>;
  responseForm!: FormGroup;
  responses$!: Observable<Response[]>
  value!: any[];

  constructor(private forumService: ForumService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private responseService: ResponseService,
    private authService: AuthService,
    private router: Router
  ) { }
  
  

  ngOnInit(): void {
    this.authService.isUser().subscribe(
      ok => console.log(ok),
      () => {
        this.router.navigateByUrl('auth/login')
      }
    )
    this.responseForm = this.formBuilder.group({
      content: ['', Validators.required],
    }, {
      updateOn: 'change'
    });
    const topicId = +this.route.snapshot.params['id']
    this.topic$ = this.forumService.getTopicById(topicId)
    this.responses$ = this.responseService.getAllResponsesByTopicId(topicId)
  }

  onResponse(): void {
    const topicId = +this.route.snapshot.params['id']
    const content = this.responseForm.value.content
    const author = `${this.authService.getUser().nom} ${this.authService.getUser().prenom}`
    const value = { content, topicId, author }
    this.responseService.addResponse(value).subscribe(
      () => location.reload()
    )
  }

  onDeleteTopic() {
    const topicId = +this.route.snapshot.params['id']
    this.forumService.deleteTopic(topicId).subscribe(
      () => this.router.navigateByUrl('forum')
    )
  }

  onDeleteResponse(id: number) {
    this.responseService.deleteResponce(id).subscribe(
      () => location.reload()
    )
  }
}
