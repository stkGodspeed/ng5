webpackJsonp([1,5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService() {
    }
    CartService.prototype.getColumns = function () {
        return ["currency", "Product", "Forex Amount", "INR Amount", "Action"];
    };
    ;
    CartService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/cart.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(462);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ngP/projects/ng5/src/main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(628),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_table_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_row_table_row_component__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_8__table_row_table_row_component__["a" /* TableRowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__cart_service__["a" /* CartService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.rate = 67;
        this.famount = 0;
        this.location = "Chennai";
        this.currency = "US DOLLOR";
        this.cardtype = "FOREX CARD";
        this.inramount = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.selectlocation = function (args) {
        this.location = args.target.options[args.target.selectedIndex].text;
    };
    HomeComponent.prototype.selectCurrency = function (args) {
        this.currency = args.target.options[args.target.selectedIndex].text;
    };
    HomeComponent.prototype.selectCard = function (args) {
        this.cardtype = args.target.options[args.target.selectedIndex].text;
    };
    HomeComponent.prototype.addProduct = function () {
        console.log(this.location + " " + " " + this.currency + " " + this.cardtype);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'home-root',
            template: __webpack_require__(629),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/home.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableRowComponent = (function () {
    function TableRowComponent() {
    }
    TableRowComponent.prototype.ngOnInit = function () {
    };
    TableRowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-table-row',
            template: __webpack_require__(630),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [])
    ], TableRowComponent);
    return TableRowComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/table-row.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent(atService) {
        this.atService = atService;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.columns = this.atService.getColumns();
    };
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__(631),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === 'function' && _a) || Object])
    ], TableComponent);
    return TableComponent;
    var _a;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/table.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=D:/ngP/projects/ng5/src/environment.prod.js.map

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = ".navbar-nav > li{\r\n  margin-left:40px;\r\n  margin-right:40px;\r\n}\r\n\r\n.carousel-inner img {\r\n     width: 100%;\r\n     height: 100%;\r\n }\r\n#rates{\r\n  .carousel-inner img {\r\n       width: 50%;\r\n       height: 50%;\r\n   }\r\n}\r\n\r\n\r\n#bodyContantainer{\r\n  border:1px solid red;\r\n  width :1024px;\r\n  height:780px;\r\n}\r\n\r\n#menuTab{\r\n  border:1px solid green;\r\n  width :1024px;\r\n  height:80px;\r\n}\r\n\r\n#logoTab{\r\n  border:1px solid green;\r\n  width :1024px;\r\n  height:80px;\r\n}\r\n\r\n#OrderContainer{\r\n  position: absolute;\r\n  top :100px;\r\n  left:400px;\r\n  width:390px;\r\n  height:500px;\r\n  border: 10px solid #BC7E22;\r\n  border-radius: 5px;\r\n  background-color: #49777A;\r\n  display: none;\r\n}\r\n\r\n#currency{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  border : 1px solid black;\r\n  top:20px;\r\n  left:220px;\r\n  width:130px;\r\n  height:25px;\r\n}\r\n\r\n#cardtype{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  border : 1px solid black;\r\n  top:80px;\r\n  left:20px;\r\n  width:330px;\r\n  height:25px;\r\n}\r\n\r\n#forexAmount{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  border : 1px solid black;\r\n  top:140px;\r\n  left:20px;\r\n  width:330px;\r\n  height:25px;\r\n}\r\n#Rate{\r\n  position:absolute;\r\n  top:300px;\r\n  left:200px;\r\n  width:330px;\r\n  height:25px;\r\n  font-size: 20pt;\r\n  color:white;\r\n}\r\n#inrAmount{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  border : 1px solid black;\r\n  top:200px;\r\n  left:20px;\r\n  width:330px;\r\n  height:25px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n#addProduct{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  top:250px;\r\n  left:200px;\r\n  width:100px;\r\n  height:25px;\r\n  cursor: pointer;\r\n}\r\n#totalAmount{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  top:450px;\r\n  left:20px;\r\n  width:100px;\r\n  height:25px;\r\n  font-size: 20pt;\r\n  color:white;\r\n}\r\n#displayOrders{\r\n  position: absolute;\r\n  border:1px solid black;\r\n  top:330px;\r\n  left:20px;\r\n  width: 330px;\r\n  height:120px;\r\n}\r\n.inputText{\r\n  position:absolute;\r\n  border-radius: 5px;\r\n  border : 1px solid black;\r\n  top:20px;\r\n  left:20px;\r\n  width:130px;\r\n  height:25px;\r\n}\r\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<home-root> </home-root>\r\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <div class=\"row \"  style=\" padding-left:40px; padding-right:40px;border-top:1px solid #ffb500;\">\n      <div class=\"span4\">\n        <img style=\"float:left\" src=\"../assets/images/bp.png\"/>\n        <div class=\"content-heading\"><h6>18001233066 &nbsp;&nbsp;&nbsp;&nbsp; </h6></div>\n      </div>\n      <div class=\"col-sm-3 d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"> <img class=\".float-left\" style=\"float:left\" src=\"../assets/images/mail.png\">&nbsp;&nbsp;forex@nishiforex.com </div>\n      <div class=\"col-sm d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\">Live Rates</div>\n      <div class=\"col-sm d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\">About Us</div>\n      <div class=\"col-sm d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\">Services</div>\n      <div class=\"col-sm d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\">Login</div>\n      <div class=\"col-sm d-none d-md-block\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\">Register</div>\n    </div>\n\n\n<nav class=\"navbar navbar-expand-md bg-light navbar-light\" style=\" border-top:1px solid #ffb500;border-bottom:1px solid #ffb500;\">\n  <a class=\"navbar-brand \" href=\"#\">\n      <img src=\"../assets/images/logo.png\" alt=\"Logo\" style=\"width:100px;\">\n  </a>\n  <button class=\"navbar-toggler\" style=\"background:#ffb500\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div style=\"float:right\" class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <div class=\"row \" >\n      <div  class=\"col-sm-2 \">\n        <a class=\"nav-link\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"  href=\"#\">Buy Forex</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"  href=\"#\">Sell Forex</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"  href=\"#\">Money Transfer</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"  href=\"#\">Forex Card</a>\n      </div>\n      <div class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#003f74; margin-left:20px;margin-right:20px;\"  href=\"#\">Travel Insurance</a>\n      </div>\n    </div>\n  </div>\n</nav>\n<br>\n<p class=\"text-center\">In a hurry</p>\n<p class=\"text-center\">Drop in Your Contact Details & We'll call you right back</p>\n\n<form class=\"form-inline justify-content-center\" >\n  <label type=\"text\" style=\"float:right\" class=\"mr-sm-2\">Request a Call Back </label>\n  <input type=\"text\" style=\"float:right\" placeholder=\"Name\" class=\"form-control mb-2 mr-sm-2\" id=\"name\">\n  <input type=\"email\" style=\"float:right\" placeholder=\"E-mail\" class=\"form-control mb-2 mr-sm-2\" id=\"email\">\n  <input type=\"number\" style=\"float:right\" placeholder=\"Mobile No.\" class=\"form-control mb-2 mr-sm-2\" id=\"mnumber\">\n  <button type=\"submit\" class=\"btn btn-primary mb-2\">Call Me</button>\n</form>\n\n<div id=\"nishi\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#nishi\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"1\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"2\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"3\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"4\"></li>\n  </ol>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"../assets/images/slide1.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../assets/images/slide2.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#nishi\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#nishi\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id = \"OrderContainer\">\n    <select id = \"location\" (change)=\"selectlocation($event)\">   class=\"inputText\" >\n               <option value = \"1\">Chennai</option>\n               <option value = \"2\">Mumbai</option>\n               <option value = \"3\">Delhi</option>\n               <option value = \"4\">Kolkatta</option>\n    </select>\n    <select id = \"currency\" (change)=\"selectCurrency($event)\"> class=\"inputText\">\n               <option value = \"1\">US DOLLOR</option>\n               <option value = \"2\">EURO</option>\n               <option value = \"3\">BRITISH POUNDS</option>\n               <option value = \"4\">AUSTRALIAN DOLLOR</option>\n               <option value = \"5\">CANADIAN DOLLOR</option>\n               <option value = \"6\">SINGAPORE DOLLOR</option>\n               <option value = \"7\">NEWZEALAND DOLLOR</option>\n               <option value = \"8\">HONGKONG DOLLOR</option>\n    </select>\n    <select id = \"cardtype\"  (change)=\"selectCard($event)\"> class=\"inputText\">\n               <option value = \"1\">FOREX CARD</option>\n               <option value = \"2\">CURRENCY NOTE</option>\n               <option value = \"3\">TRAVELLAR CHEQUES</option>\n    </select>\n    <input type=\"number\"   id=\"forexAmount\" [(ngModel)]=\"famount\" value=0  placeholder=\"Forex Amount\"/>\n    <div type=\"number\" id=\"Rate\">Rate {{rate}}</div>\n    <input  id=\"inrAmount\"  value={{famount*rate}} placeholder=\"INR Amount\"/>\n\n    <button id=\"addProduct\" type=\"button\" (click)=\"addProduct()\"  >Add Product</button>\n    <div id=\"totalAmount\"  > RS {{famount*rate}} </div>\n    <div id=\"displayOrders\">\n        <app-table></app-table>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<p>\n  table-row works!\n</p>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <th *ngFor=\"let col of columns\">\n      {{col}}\n    </th>\n  </tr>\n  <tr>\n    <td *ngFor=\"let col of columns\">\n    \n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[660]);
//# sourceMappingURL=main.bundle.map