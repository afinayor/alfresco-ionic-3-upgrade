import { Component, ViewChild , OnInit } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ALFRESCO_IONIC_PROVIDERS, AuthService, SettingsService } from 'ionic-alfresco';


import { FolderViewPage } from '../pages/folder-view/folder-view';
import { LoginPage } from '../pages/login/login';
import { TrashcanViewPage } from '../pages/trashcan-view/trashcan-view';

// declare let __moduleName: string;


@Component({
  templateUrl: 'app.html',
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
    private menu: MenuController,
    private authService: AuthService,
      private settingsService: SettingsService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Files', component: FolderViewPage },
      { title: 'Trashcan', component: TrashcanViewPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
      this.rootPage = this.authService.isLoggedIn() ? FolderViewPage : LoginPage;
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.menu.close();
    this.nav.setRoot(page.component);
  }
  logout() {
    this.authService.logout()
      .then(
        () => this.nav.setRoot(LoginPage),
        (err) => this.nav.setRoot(LoginPage)
      );
  }
}
