import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IesPageRoutingModule } from './ies-routing.module';

import { IesPage } from './ies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IesPageRoutingModule
  ],
  declarations: [IesPage]
})
export class IesPageModule {}
