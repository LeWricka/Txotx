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
import { NavController, NavParams } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';
import { CounterActions } from '../../actions';
import { AngularFire } from 'angularfire2';
var TurnPage = (function () {
    function TurnPage(navCtrl, af, actions, params) {
        this.navCtrl = navCtrl;
        this.actions = actions;
        this.item = af.database.object('/sidreros/aritz');
        this.datosUsuario = params.get('user');
    }
    TurnPage.prototype.update = function (name) {
        this.item.update({ name: 'movida' });
    };
    return TurnPage;
}());
__decorate([
    select(),
    __metadata("design:type", Observable)
], TurnPage.prototype, "turn$", void 0);
TurnPage = __decorate([
    Component({
        selector: 'turn-page',
        providers: [AsyncPipe, CounterActions],
        templateUrl: 'turn.html'
    }),
    __metadata("design:paramtypes", [NavController, AngularFire,
        CounterActions, NavParams])
], TurnPage);
export { TurnPage };
//# sourceMappingURL=turn.js.map