(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"background\">\n  <div class=\"content\">\n    <div class=\"button-action\">\n      <ion-button fill=\"clear\" color=\"dark\" size=\"small\" routerLink=\"/signup\" rounterDirection=\"root\">\n        <b><p class=\"signin-text\">Sign In</p></b>\n      </ion-button>\n      <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\n        <b><p class=\"signup-text\">Sign Up</p></b>\n      </ion-button>\n      <div class=\"ion-padding\">\n        <ion-input placeholder=\"Email\" style=\"padding: left 10px !important; font-family: 'Nunito, sans-serif;'\"></ion-input> <br>\n        <ion-input placeholder=\"Passwrold\" style=\"padding: left 10px !important; font-family: 'Nunito, sans-serif;'\"></ion-input>\n      </div>\n      <ion-button class=\"actionbutton\" expand=\"full\" fill=\"clear\" style=\"text-transform: none;\">Sign In</ion-button>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-checkbox style=\"margin-bottum: 7px; margin-left:8px\">&nbsp;\n              <ion-label style=\"display: inline-block; vertical-align: top; font-family: 'Nunito, sans-serif;'\"><p style=\"font-size: small; margin-bottom: 3px;\">Stay Connected</p></ion-label>\n            </ion-checkbox>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button fill=\"clear\" style=\"font-size:small; color: #a8a8a8; margin-right:10px; text-transform:none; font-family: 'Nunito, sans-serif;' \"><p style=\"font-size:small; margin-bottun:37.5px\">Forgot Password</p></ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"line\" size=\"5\">\n\n          </ion-col>\n          <ion-col size=\"2\" style=\"text-align: center;\">\n            Or\n          </ion-col>\n          <ion-col class=\"line\" size=\"5\">\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button class=\"fbbutton\" fill=\"clear\"><b>Facebook</b></ion-button>\n      <ion-button class=\"googlebutton\" fill=\"clear\"><b>Google</b></ion-button>\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ioni-content.background {\n  --background: url('Background.jpeg') 0 0/100% 100% no-repeat;\n}\n\n.content {\n  position: fixed;\n  margin-top: 310px;\n  margin-left: 40px;\n}\n\n.buttons-action {\n  margin-left: 5px;\n}\n\n.signup-text {\n  font-size: small;\n  color: #a8a8a8;\n  text-align: center;\n  font-family: \"Nunito\", \"sans-serif\";\n  text-transform: none;\n}\n\n.signin-text {\n  font-size: small;\n  color: #0000;\n  text-align: center;\n  font-family: \"Nunito\", \"sans-serif\";\n  text-transform: none;\n}\n\n.ion-input {\n  background-color: #ededed;\n  border-radius: 5px;\n  font-size: small;\n}\n\n.actionbutton {\n  background-color: aqua;\n  color: black;\n  border-radius: 5px;\n  margin-left: 15px;\n  margin-right: 13px;\n  font-size: small;\n  font-family: \"Nunito\", \"sans-serif\";\n}\n\n.ion-checkbox {\n  background: #a04eff;\n  border-radius: 5px;\n  --height: 10px;\n  --width: 10px;\n  --checkmark-color: white;\n  --background-checked: #a04eff;\n  --border-color: #a04eff;\n}\n\n.line {\n  border-bottom: 1px solid gray;\n  margin-bottom: 16px;\n}\n\n.fbbutton {\n  background: #3b5998;\n  border-radius: 6px;\n  color: cornsilk;\n  margin-bottom: 12px;\n  font-family: \"Nunito\", \"sans-serif\";\n  text-transform: none;\n}\n\n.googlebutton {\n  background: #ea4335;\n  border-radius: 6px;\n  color: cornsilk;\n  margin-bottom: 12px;\n  font-family: \"Nunito\", \"sans-serif\";\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBUUY7O0FBTkE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtBQVVGOztBQVJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7QUFXRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbmktY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL0JhY2tncm91bmQuanBlZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogMzEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmJ1dHRvbnMtYWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zaWdudXAtdGV4dCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjYThhOGE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uc2lnbmluLXRleHQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYWN0aW9uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBcInNhbnMtc2VyaWZcIjtcbn1cbi5pb24tY2hlY2tib3gge1xuICBiYWNrZ3JvdW5kOiAjYTA0ZWZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taGVpZ2h0OiAxMHB4O1xuICAtLXdpZHRoOiAxMHB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjYTA0ZWZmO1xuICAtLWJvcmRlci1jb2xvcjogI2EwNGVmZjtcbn1cbi5saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZmJidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5nb29nbGVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZWE0MzM1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIFwic2Fucy1zZXJpZlwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map