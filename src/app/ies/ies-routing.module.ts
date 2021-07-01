import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IesPage } from './ies.page';

const routes: Routes = [
  {
    path: '',
    component: IesPage
  },
  {
    path: 'iesdetalle',
    loadChildren: () => import('./iesdetalle/iesdetalle.module').then( m => m.IesdetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IesPageRoutingModule {}
