import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IesdetallePageModule } from './ies/iesdetalle/iesdetalle.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ies',
    pathMatch: 'full'
  },
  {
    path: 'ies',
    children: [{
      path: '',      
    loadChildren: () => import('./ies/ies.module').then( m => m.IesPageModule)
    },
    {
      path: ':id',
    loadChildren: () => import('./ies/iesdetalle/iesdetalle.module').then(m => m.IesdetallePageModule)
    }]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
