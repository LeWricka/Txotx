import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { CounterActions } from '../../actions';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'ranking-page',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'ranking.html'
})
export class RankingPage {
  users: FirebaseListObservable<any[]>;
  // users: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,
    public actions: CounterActions,
    public af: AngularFire) {
    this.users = this.af.database.list('/sidreros');
  }
}


