import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {select} from 'ng2-redux';
import {CounterActions} from '../../actions';
import {Turn} from '../../store/turn/turn.types';
import {AngularFire, AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2';
import {Http} from '@angular/http';
import {Ionic2RatingModule} from 'ionic2-rating';


@Component({
  selector: 'karma-page',
  providers: [AsyncPipe, CounterActions],
  templateUrl: 'karma.html'
})
export default class karmaPage {
  item: FirebaseObjectObservable<any>;
  usuario: any;
  rating: any;
  datosUsuarioInicial: any;
  datosUsuario: any;
  @select() turn$: Observable<Turn>;
  private database: AngularFireDatabase;

  constructor(public navCtrl: NavController, af: AngularFire, public actions: CounterActions, params: NavParams, public alertCtrl: AlertController, public http: Http) {
    this.datosUsuarioInicial = params.get('user');
    // http.get('https://us-central1-txotx-39e56.cloudfunctions.net/helloWorld')
    //   .subscribe((data) => {
    //     console.log('data', data);
    //   });
    this.database = af.database;
    this.item = af.database.object('/sidreros/' + this.datosUsuarioInicial.name, {preserveSnapshot: true});
    this.item.subscribe(snapshot => {
      this.datosUsuario = snapshot.val();
      console.log(this.datosUsuario);
    });
  }

  pushKarma(value) {

    this.database.list('/sidreros/' + this.datosUsuario.name + '/karma/likes').push(value).then(resolve => {
      console.log('success');
    }, reject => {
      console.log('error');
    })
      .catch(reject => {
        console.log('catch');
      });
  }
}

