import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './interceptors';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent
  ],
  providers: [
    HttpInterceptorProviders
  ]
})
export class CoreModule { }
