var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TurnPage } from '../pages/turn/turn';
import { Components } from '../components';
import { NgRedux } from 'ng2-redux';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';
export var firebaseConfig = {
    apiKey: 'AIzaSyDG_EY7UyEAAegGqG1k9E3P5xcLJ-zxXIs',
    authDomain: 'txotx-39e56.firebaseapp.com',
    databaseURL: 'https://txotx-39e56.firebaseio.com',
    storageBucket: 'txotx-39e56.appspot.com',
    messagingSenderId: '971761976186'
};
export function ngReduxFactory() {
    return new NgRedux();
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            HomePage,
            TurnPage
        ].concat(Components),
        imports: [
            IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(firebaseConfig)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            HomePage,
            TurnPage
        ],
        providers: [
            AuthService,
            { provide: NgRedux, useFactory: ngReduxFactory }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map