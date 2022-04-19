import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForumComponent } from "./forum/forum.component";
import { SingleTopicComponent } from "./single-topic/single-topic.component";


const routes: Routes = [
  { path: '', component: ForumComponent,},
  { path: ':id', component: SingleTopicComponent,},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ForumRoutingModule {}