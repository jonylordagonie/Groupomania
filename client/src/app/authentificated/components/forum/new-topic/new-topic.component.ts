import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.scss']
})
  
export class NewTopicComponent implements OnInit {
  newTopicForm!: FormGroup;
  
  constructor(private router: Router,
              private formBuilder: FormBuilder,
    private forumService: ForumService,
    private authService: AuthService) { }

  ngOnInit(): void {
      this.newTopicForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    }, {
      updateOn: 'change'
    });
  }

  get f() { return this.newTopicForm.controls; }

  onsubmit(): void{
    const title = this.newTopicForm.value.title
    const content = this.newTopicForm.value.content
    const author = `${this.authService.getUser().nom} ${this.authService.getUser().prenom}`
    const value = {title, content, author}
    this.forumService.addTopic(value).subscribe(
      () => this.router.navigateByUrl('/forum')
    );
  }


}
