import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ALFRESCO_IONIC_PROVIDERS, AuthService, SettingsService } from 'ionic-alfresco';
import { ALFRESCO_IONIC_DIRECTIVES, NodeEvent } from 'ionic-alfresco';


import { FolderViewPage } from '../pages/folder-view/folder-view';
import { LoginPage } from '../pages/login/login';
import { TrashcanViewPage } from '../pages/trashcan-view/trashcan-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FolderViewPage,
    LoginPage,
    TrashcanViewPage,
    ALFRESCO_IONIC_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FolderViewPage,
    LoginPage,
    TrashcanViewPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ALFRESCO_IONIC_PROVIDERS,
    // AuthService,
    // SettingsService,

  ]
})
export class AppModule {}
