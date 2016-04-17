import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the PhotosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/photos/photos.html',
})
export class PhotosPage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
