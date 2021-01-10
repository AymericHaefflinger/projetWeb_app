(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-magasin-rooting-module"],{

/***/ "nqk4":
/*!**************************************************!*\
  !*** ./src/app/module/magasin-rooting.module.ts ***!
  \**************************************************/
/*! exports provided: MagasinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagasinRoutingModule", function() { return MagasinRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produit/produit.component */ "BoWJ");
/* harmony import */ var _panier_panier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panier/panier.component */ "aY6Z");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "dzTG");







const routes = [
    {
        path: "catalogue",
        component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_2__["ProduitComponent"]
    },
    {
        path: "catalogue/:id",
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
    },
    { path: "panier", component: _panier_panier_component__WEBPACK_IMPORTED_MODULE_3__["PanierComponent"] },
    { path: "**", redirectTo: "/catalogue", pathMatch: "full" }
];
class MagasinRoutingModule {
}
MagasinRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MagasinRoutingModule });
MagasinRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MagasinRoutingModule_Factory(t) { return new (t || MagasinRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MagasinRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MagasinRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=module-magasin-rooting-module.js.map