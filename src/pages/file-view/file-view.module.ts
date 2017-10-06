import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileView } from './file-view';

@NgModule({
  declarations: [
    FileView,
  ],
  imports: [
    IonicPageModule.forChild(FileView),
  ],
})
export class FileViewPageModule {}
