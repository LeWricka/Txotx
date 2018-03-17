import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {CounterRecord} from '../../store';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {select} from 'ng2-redux';
import {CounterActions} from '../../actions';
import {TurnPage} from '../turn/turn';
import {AuthService} from '../../providers/auth-service';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {RankingPage} from '../ranking/ranking';
import karmaPage from '../karma/karma';

@Component({
  selector: 'page-home',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'home.html'
})
export class HomePage {
  @select() counter$: Observable<CounterRecord>;
  users: FirebaseListObservable<any[]>;
  loading: any;

  // users: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,
              public actions: CounterActions,
              public af: AngularFire, private _auth: AuthService,
              public loadingCtrl: LoadingController) {
    this.signInWithFacebook;
    this.loading = this.loadingCtrl.create({content: '¡Llamando al camarero!'});
    this.loading.present();

    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  signInWithFacebook(): void {
  }

  private onSignInSuccess(): void {
    this.users = this.af.database.list('/sidreros');
    this.loading.dismiss();
    console.log(this.users)
  }


  goToUser(user: any) {
    console.log(user);
    this.navCtrl.push(TurnPage, {user: user});
  }

  goToRanking() {
    this.navCtrl.push(RankingPage);
  }

  goTokarma(user: any) {
    this.navCtrl.push(karmaPage, {user: user});
  }
}
