import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CounterRecord } from '../../store';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';
import { TurnPage } from '../turn/turn';
import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'home.html'
})
export class HomePage {
  @select() counter$: Observable<CounterRecord>;
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
    public actions: CounterActions,
    public af: AngularFire, private _auth: AuthService) {
      this.items = af.database.list('/items');
      console.log(this.items);
  }

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
    .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this);
  }

  goToTurn() {
    this.navCtrl.push(TurnPage, {});
  }

}
