import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';
import { Turn } from '../../store/turn/turn.types';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'turn-page',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'turn.html'
})
export class TurnPage {
  item: FirebaseObjectObservable<any>;
  usuario: any;
  datosUsuario: any;
  @select() turn$: Observable<Turn>;

  constructor(public navCtrl: NavController, af: AngularFire,
    public actions: CounterActions, params: NavParams) {
      this.item = af.database.object('/sidreros/aritz');
      this.datosUsuario = params.get('user');
  }

  update(name: string) {
    this.item.update({ name: 'movida' });
  }
}
