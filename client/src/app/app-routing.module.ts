import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './guest/landing-page/components/langing-page/langing-page.component';


const routes: Routes = [
  {path: '', component: LangingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
  
export class AppRoutingModule { }
