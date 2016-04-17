import 'es6-shim';
import {App, Platform, Storage, LocalStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {BackandService} from './providers/backand/backand';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
	providers: [ BackandService ],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = TabsPage;
	backand: BackandService;
	storage: Storage;

  constructor(platform: Platform, backand: BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

		this.backand = backand;

		this.storage = new Storage(LocalStorage);
		this.storage.getJson("user").then((data) => {
			if(data) {
				this.backand.getAuthTokenSimple(data.username, data.password).subscribe(
					(response) => {
						console.info(response)
					},
					(error) => {
						this.rootPage = LoginPage;
					}
				);
			}
			else {
				this.rootPage = LoginPage;
			}
		})
  }
}
