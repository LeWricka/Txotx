import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {TurnPage} from '../pages/turn/turn';
import {Components} from '../components';

import {NgRedux} from 'ng2-redux';
import {AppState} from '../store';

import {AngularFireModule} from 'angularfire2';
import {AuthService} from '../providers/auth-service';
import {RankingPage} from '../pages/ranking/ranking';
import karmaPage from "../pages/karma/karma";
import { Ionic2RatingModule } from 'ionic2-rating';

export const firebaseConfig = {
  apiKey: 'AIzaSyDG_EY7UyEAAegGqG1k9E3P5xcLJ-zxXIs',
  authDomain: 'txotx-39e56.firebaseapp.com',
  databaseURL: 'https://txotx-39e56.firebaseio.com',
  storageBucket: 'txotx-39e56.appspot.com',
  messagingSenderId: '971761976186'
};

export function ngReduxFactory() {
  return new NgRedux<AppState>();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TurnPage,
    RankingPage,
    karmaPage,
    ...Components
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TurnPage,
    RankingPage,
    karmaPage,
  ],
  providers: [
    AuthService,
    {provide: NgRedux, useFactory: ngReduxFactory}
  ]
})
export class AppModule {
}
