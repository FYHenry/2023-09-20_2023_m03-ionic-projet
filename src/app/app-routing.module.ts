import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConferenceComponent } from './conference/conference.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conference',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    redirectTo: 'conference',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    component: ConferenceComponent
  },
  {
    path: '**',
    redirectTo: 'conference',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
