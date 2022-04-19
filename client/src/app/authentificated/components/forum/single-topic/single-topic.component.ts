import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/core/services/forum.service';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})
export class SingleTopicComponent implements OnInit {
  topic$!: Observable<Topic>;
  responseForm!: FormGroup;

  constructor(private forumService: ForumService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) { }
  
  

  ngOnInit(): void {
    this.responseForm = this.formBuilder.group({
      content: ['', Validators.required],
    }, {
      updateOn: 'change'
    });


    const topicId = +this.route.snapshot.params['id']
    this.topic$ = this.forumService.getTopicById(topicId)
  }

  onResponse(): void {

  }

}
