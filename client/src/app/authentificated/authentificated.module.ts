import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstamaniaComponent } from './components/instamania/instamania.component';
import { IndexComponent } from './components/index/index/index.component';
import { ProfilComponent } from './components/profil/profil/profil.component';
import { AuthentificatedRoutingModule } from './authentificated-routing.module';
import { ModifyProfilComponent } from './components/profil/modify-profil/modify-profil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilComponent,
    InstamaniaComponent,
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
    ModifyProfilComponent,
  ]
})
export class AuthentificatedModule { }
