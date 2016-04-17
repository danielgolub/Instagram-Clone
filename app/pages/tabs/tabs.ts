import {Page} from 'ionic-angular';
import {PhotosPage} from '../photos/photos';
import {SettingsPage} from '../settings/settings';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PhotosPage;
  tab2Root: any = SettingsPage;
}
