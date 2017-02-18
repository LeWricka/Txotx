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
  datosUsuarioInicial: any;
  datosUsuario: any;
  @select() turn$: Observable<Turn>;

  constructor(public navCtrl: NavController, af: AngularFire,
    public actions: CounterActions, params: NavParams) {
    this.datosUsuarioInicial = params.get('user');
    this.item = af.database.object('/sidreros/' + this.datosUsuarioInicial.name, { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
       this.datosUsuario = snapshot.val();
       console.log(this.datosUsuario);
    });
  }

  updateCerveza(actualValue) {
    console.log('Birra');
    console.log(actualValue);
    this.item.update({ ceveza: actualValue + 1 });
  }

  updateVino(actualValue) {
    console.log('VIno');
    console.log(actualValue);
    this.item.update({ vino: actualValue + 1 });
  }

  updateKubata(actualValue) {
    console.log('Kubat');
    console.log(actualValue);
    this.item.update({ cubata: actualValue + 1 });
  }

  updateTxupito(actualValue) {
    console.log('txupito');
    console.log(actualValue);
    this.item.update({ txupito: actualValue + 1 });
  }

  updateTxotx(actualValue) {
    console.log('txot');
    console.log(actualValue);
    this.item.update({ txotx: actualValue + 1 });
  }
}
