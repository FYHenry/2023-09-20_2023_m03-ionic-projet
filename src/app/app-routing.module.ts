import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder/folder.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/conference',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    redirectTo: 'folder/conference',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    component: FolderPage
  },
  {
    path: '**',
    redirectTo: 'folder/conference',
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
