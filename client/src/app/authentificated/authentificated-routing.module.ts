import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { ForumRoutingModule } from "./components/forum/forum-routing.module";
import { ForumComponent } from "./components/forum/forum/forum.component";
import { IndexComponent } from "./components/index/index.component";
import { InstamaniaComponent } from "./components/instamania/instamania.component";
import { ModifyProfilComponent } from "./components/profil/modify-profil/modify-profil.component";
import { ProfilComponent } from "./components/profil/profil/profil.component";


const routes: Routes = [
  { path: 'profil/:id', component: ProfilComponent },
  { path: 'index', component: IndexComponent,  },
  { path: 'instamania', component: InstamaniaComponent},
  { path: 'profil/:id/modify', component: ModifyProfilComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthentificatedRoutingModule {}