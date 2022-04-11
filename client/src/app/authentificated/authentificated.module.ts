import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './components/forum/forum.component';
import { InstamaniaComponent } from './components/instamania/instamania.component';
import { IndexComponent } from './components/index/index.component';
import { ProfilComponent } from './components/profil/profil/profil.component';
import { AuthentificatedRoutingModule } from './authentificated-routing.module';
import { ModifyProfilComponent } from './components/profil/modify-profil/modify-profil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilComponent,
    ForumComponent,
    InstamaniaComponent,
    IndexComponent,
    ModifyProfilComponent
  ],
  imports: [
    CommonModule,
    AuthentificatedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfilComponent,
    ForumComponent,
    InstamaniaComponent,
    IndexComponent
  ]
})
export class AuthentificatedModule { }
