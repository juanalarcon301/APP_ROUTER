import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IesdetallePageRoutingModule } from './iesdetalle-routing.module';

import { IesdetallePage } from './iesdetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IesdetallePageRoutingModule
  ],
  declarations: [IesdetallePage]
})
export class IesdetallePageModule {}
