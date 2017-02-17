var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';
import { TurnPage } from '../turn/turn';
import { AuthService } from '../../providers/auth-service';
import { AngularFire } from 'angularfire2';
var HomePage = (function () {
    function HomePage(navCtrl, actions, af, _auth) {
        this.navCtrl = navCtrl;
        this.actions = actions;
        this.af = af;
        this._auth = _auth;
        this.items = af.database.list('/items');
        console.log(this.items);
    }
    HomePage.prototype.signInWithFacebook = function () {
        var _this = this;
        this._auth.signInWithFacebook()
            .then(function () { return _this.onSignInSuccess(); });
    };
    HomePage.prototype.onSignInSuccess = function () {
        console.log("Facebook display name ", this);
    };
    HomePage.prototype.goToTurn = function () {
        this.navCtrl.push(TurnPage, {});
    };
    return HomePage;
}());
__decorate([
    select(),
    __metadata("design:type", Observable)
], HomePage.prototype, "counter$", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        providers: [AsyncPipe, CounterActions],
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController,
        CounterActions,
        AngularFire, AuthService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map