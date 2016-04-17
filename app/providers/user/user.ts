import {Injectable} from 'angular2/core';
import {BackandService} from '../backand/backand';
import {Alert, NavController, Storage, LocalStorage} from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {
	storage: Storage;

  constructor(private backand: BackandService, private nav: NavController) {
		this.storage = new Storage(LocalStorage);
	}

	login(username: string, password: string) {
		let alert: Alert;
		if (!username.length || !password.length) {
			alert = Alert.create({
				title: "Oops",
				subTitle: "You forgot to enter your username and password..",
				buttons: [ "OK, Got it" ]
			})
			this.nav.present(alert);
		}

		else {
			this.backand.getAuthTokenSimple(username, password).subscribe(
				(response) => {
					console.info(response);
				},
				(error) => {
					switch(error.status) {
						case 400:
							alert = Alert.create({
								title: "Oops",
								subTitle: "Invalid username / password",
								buttons: [ "OK, Got it" ]
							})
							this.nav.present(alert);
							break;
					}
				}
			);
		}
	}

	register(username: string, password: string) {
		let alert: Alert;
		if (!username.length || !password.length) {
			alert = Alert.create({
				title: "Oops",
				subTitle: "You forgot to enter your username and password..",
				buttons: [ "OK, Got it" ]
			})
			this.nav.present(alert);
		}

		else {
			this.backand.register(username, password).subscribe(
				(response) => {
					this.storage.setJson("user", response)
					this.nav.setRoot(TabsPage);
				},
				(error) => {
					console.warn(error)
					switch(error.status) {
						case 400:
							alert = Alert.create({
								title: "Oops",
								subTitle: "Invalid username / password",
								buttons: [ "OK, Got it" ]
							})
							this.nav.present(alert);
							break;
					}
				}
			);
		}
	}
}

export interface UserInterface {
	username: string
	password: string
	firstName: string
	lastName: string
	pushTokens: string
}
