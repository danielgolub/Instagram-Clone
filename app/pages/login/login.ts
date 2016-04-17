import {Page, NavController} from 'ionic-angular';
import {BackandService} from '../../providers/backand/backand';
import {User} from '../../providers/user/user';
import {RegisterPage} from '../../pages/register/register';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
	providers: [ BackandService, User ]
})
export class LoginPage {
	username: string;
	password: string;

  constructor(public nav: NavController, private user: User) {
		this.username = "";
		this.password = "";
  }

	login() {
		this.user.login(this.username, this.password);
	}

	register() {
		this.nav.push(RegisterPage)
	}
}
