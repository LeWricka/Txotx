import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';
import { Turn } from '../../store/turn/turn.types';

@Component({
  selector: 'turn-page',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'turn.html'
})
export class TurnPage {
  @select() turn$: Observable<Turn>;

  constructor(public navCtrl: NavController,
    public actions: CounterActions) {
  }
}
