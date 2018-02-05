import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraysPage } from './trays';

@NgModule({
  declarations: [
    TraysPage,
  ],
  imports: [
    IonicPageModule.forChild(TraysPage),
  ],
  exports: [
    TraysPage
  ]
})
export class SetPageModule {}
