import {Page, NavController} from 'ionic-angular';
import {User} from '../../providers/user/user';
import {BackandService} from '../../providers/backand/backand';

/*
  Generated class for the RegisterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/register/register.html',
	providers: [ User, BackandService ]
})
export class RegisterPage {
	username: string;
	password: string;

  constructor(public nav: NavController, private backand: BackandService, private user: User) {
		this.username = "";
		this.password = "";
  }

	register() {
		this.user.register(this.username, this.password);
	}

	login() {
		this.nav.popToRoot();
	}
}
