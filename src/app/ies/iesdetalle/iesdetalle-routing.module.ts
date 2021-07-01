import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IesdetallePage } from './iesdetalle.page';

const routes: Routes = [
  {
    path: '',
    component: IesdetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IesdetallePageRoutingModule {}
