(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["singup-singup-module"],{

/***/ "/+7C":
/*!***************************************!*\
  !*** ./src/app/singup/singup.page.ts ***!
  \***************************************/
/*! exports provided: SingupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPage", function() { return SingupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_singup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./singup.page.html */ "hZp1");
/* harmony import */ var _singup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singup.page.scss */ "SdLN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SingupPage = class SingupPage {
    constructor() { }
    ngOnInit() {
    }
};
SingupPage.ctorParameters = () => [];
SingupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singup',
        template: _raw_loader_singup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingupPage);



/***/ }),

/***/ "EnsY":
/*!*************************************************!*\
  !*** ./src/app/singup/singup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SingupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageRoutingModule", function() { return SingupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singup.page */ "/+7C");




const routes = [
    {
        path: '',
        component: _singup_page__WEBPACK_IMPORTED_MODULE_3__["SingupPage"]
    }
];
let SingupPageRoutingModule = class SingupPageRoutingModule {
};
SingupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingupPageRoutingModule);



/***/ }),

/***/ "SdLN":
/*!*****************************************!*\
  !*** ./src/app/singup/singup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5ndXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "d1Du":
/*!*****************************************!*\
  !*** ./src/app/singup/singup.module.ts ***!
  \*****************************************/
/*! exports provided: SingupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageModule", function() { return SingupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _singup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singup-routing.module */ "EnsY");
/* harmony import */ var _singup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singup.page */ "/+7C");







let SingupPageModule = class SingupPageModule {
};
SingupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _singup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingupPageRoutingModule"]
        ],
        declarations: [_singup_page__WEBPACK_IMPORTED_MODULE_6__["SingupPage"]]
    })
], SingupPageModule);



/***/ }),

/***/ "hZp1":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/singup/singup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background\">\n  <div class=\"content\">\n    <div class=\"button-action\">\n      <ion-button fill=\"clear\" color=\"dark\" size=\"small\" routerLink=\"/home\" rounterDirection=\"root\">\n        <p class=\"signin-text\"> Sign In</p>\n      </ion-button>\n      <ion-button fill=\"clear\" color=\"dark\" size=\"small\">\n        <p class=\"signin-text\"> Sign Up</p>\n      </ion-button>\n    </div>\n    <div class=\"ion-padding\">\n      <ion-input placeholder=\"Email\" style=\"padding: left 10px !important; font-family: 'Nunito, sans-serif;'\"></ion-input> <br>\n      <ion-input placeholder=\"Passwrold\" style=\"padding: left 10px !important; font-family: 'Nunito, sans-serif;'\"></ion-input>\n      <br>\n      <ion-input placeholder=\"Confirm Passwrold\" style=\"padding: left 10px !important; font-family: 'Nunito, sans-serif;'\"></ion-input>\n    </div>\n    <ion-button class=\"actionbutton\" expand=\"full\" fill=\"clear\" style=\"text-transform: none;\">Sign In</ion-button>\n    <ion-button  fill=\"clear\" style=\"font-size: 10px; padding-bottom: 20px; color: #a8a8a8; margin-right: 10px; text-transform: none; font-family: 'Nunito, sans-serif;'\">Already Have An Account?</ion-button>\n\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=singup-singup-module.js.map