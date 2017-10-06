import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FolderViewPage } from './folder-view';
import { ALFRESCO_IONIC_DIRECTIVES, NodeEvent } from 'ionic-alfresco';

@NgModule({
  declarations: [
    FolderViewPage
  ],
  imports: [
    IonicPageModule.forChild(FolderViewPage),
  ],
  providers: [


  ]
})
export class FolderViewPageModule {}
