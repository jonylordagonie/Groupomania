import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
              private forumService: ForumService) { }

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
    this.forumService.addTopic(this.newTopicForm.value).subscribe(
      () => this.router.navigateByUrl('/forum')
    );
  }


}
