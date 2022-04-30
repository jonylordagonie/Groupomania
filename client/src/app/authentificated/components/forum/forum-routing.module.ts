import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { ForumComponent } from "./forum/forum.component";
import { NewTopicComponent } from "./new-topic/new-topic.component";
import { SingleTopicComponent } from "./single-topic/single-topic.component";


const routes: Routes = [
  { path: '', component: ForumComponent, canActivate: [AuthGuard]},
  { path: 'new', component: NewTopicComponent, canActivate: [AuthGuard]},
  { path: ':id', component: SingleTopicComponent, canActivate: [AuthGuard]},
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