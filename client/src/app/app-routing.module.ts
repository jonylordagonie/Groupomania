import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './guest/landing-page/components/langing-page/langing-page.component';


const routes: Routes = [
  { path: 'forum', loadChildren: () => import('./authentificated/components/forum/forum.module').then(m => m.ForumModule) },
  { path: 'index', loadChildren: () => import('./authentificated/components/index/index.module').then(m => m.IndexModule)},
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
