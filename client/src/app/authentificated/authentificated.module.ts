import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstamaniaComponent } from './components/instamania/instamania.component';
import { IndexComponent } from './components/index/index.component';
import { ProfilComponent } from './components/profil/profil/profil.component';
import { AuthentificatedRoutingModule } from './authentificated-routing.module';
import { ModifyProfilComponent } from './components/profil/modify-profil/modify-profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTopicComponent } from './components/forum/new-topic/new-topic.component';


@NgModule({
  declarations: [
    ProfilComponent,
    InstamaniaComponent,
    IndexComponent,
    ModifyProfilComponent,
  ],
  imports: [
    CommonModule,
    AuthentificatedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfilComponent,
    InstamaniaComponent,
    IndexComponent,
    ModifyProfilComponent,
  ]
})
export class AuthentificatedModule { }
