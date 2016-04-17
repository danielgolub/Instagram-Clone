import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
