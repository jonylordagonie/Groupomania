import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ManiasListComponent } from './manias-list/manias-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { IndexRoutingModule } from './index-routing.module';



@NgModule({
  declarations: [
    IndexComponent,
    ManiasListComponent,
    TopicListComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports:[
    IndexComponent,
    ManiasListComponent,
    TopicListComponent
  ]
})
export class IndexModule { }
