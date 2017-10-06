import { Component , NgModule} from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ALFRESCO_IONIC_DIRECTIVES } from 'ionic-alfresco';

// declare let __moduleName: string;
@NgModule({
  
})
@Component({

  templateUrl: './file-view.html',

})
export class FileView {

  nodeId: string;

  constructor(private navParams: NavParams) {
    this.nodeId = navParams.get('nodeId');
  }
}
