import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TrashcanViewPage } from './trashcan-view';


@NgModule({
  declarations: [
    TrashcanViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TrashcanViewPage),
  ],
})
export class TrashcanViePageModule {}
