var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, AuthMethods } from 'angularfire2';
var AuthService = (function () {
    function AuthService(auth$) {
        var _this = this;
        this.auth$ = auth$;
        this.authState = auth$.getAuth();
        auth$.subscribe(function (state) {
            _this.authState = state;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWithFacebook = function () {
        return this.auth$.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous
        });
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
    };
    AuthService.prototype.displayName = function () {
        if (this.authState != null) {
        }
        else {
            return '';
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireAuth])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth-service.js.map