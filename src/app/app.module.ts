import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TurnPage } from '../pages/turn/turn';
import { Components } from '../components';

import { NgRedux } from 'ng2-redux';
import { AppState } from '../store/store';

export function ngReduxFactory() {
    return new NgRedux<AppState>();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TurnPage,
    ...Components
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TurnPage
  ],
  providers: [
    { provide: NgRedux, useFactory: ngReduxFactory }
  ]
})
export class AppModule {}
