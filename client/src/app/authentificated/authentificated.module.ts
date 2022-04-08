import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './components/forum/forum.component';
import { InstamaniaComponent } from './components/instamania/instamania.component';
import { IndexComponent } from './components/index/index.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AuthentificatedRoutingModule } from './authentificated-routing.module';

@NgModule({
  declarations: [
    ProfilComponent,
    ForumComponent,
    InstamaniaComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AuthentificatedRoutingModule
  ],
  exports: [
    ProfilComponent,
    ForumComponent,
    InstamaniaComponent,
    IndexComponent
  ]
})
export class AuthentificatedModule { }
