import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';

import { ForumRoutingModule } from './forum-routing.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { SingleTopicComponent } from './single-topic/single-topic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTopicComponent } from './new-topic/new-topic.component';



@NgModule({
  declarations: [
    ForumComponent,
    TopicListComponent,
    SingleTopicComponent,
    NewTopicComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ForumComponent,
    TopicListComponent,
    SingleTopicComponent,
    NewTopicComponent,
  ]
})
export class ForumModule { }
