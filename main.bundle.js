webpackJsonp([1,5],{

/***/ 347:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 347;


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(463);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ngP/projects/ng5/src/main.js.map

/***/ }),

/***/ 462:
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
            template: __webpack_require__(634),
            styles: [__webpack_require__(629)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/app.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(468);
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
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__(642);
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orderitem__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_select2__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_select2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_select2__);
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
        this.locations = ["Abohar", "Adampur", "Addadakha", "Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Ajnala", "Alamuru", "Alappuzha", "Aligarh", "Allahabad", "Aluva", "Alwar", "Ambala", "Ambala Cantonment", "Ambikapur", "Amravati", "Amreli", "Amritsar", "Amtala", "Anand", "Anantapur", "Angul", "Ankleshwar", "Apra", "Arambagh", "Arani", "Asansol", "Athni", "Aurangabad", "Azamgarh", "Baddi", "Bagalkot", "Baghapurana", "Bagnan", "Bahadurgarh", "Baharampur", "Balasore", "Ballabhgarh", "Balurghat", "Baner", "Banga", "Bangalore", "Bankura", "Banswara", "Bapatla", "Baramati", "Barbil", "Bardoli", "Bareilly", "Bargarh", "Barnala", "Barrackpore", "Baruipur", "Basirhat", "Batala", "Bathinda", "Bazpur", "Begowal", "Begusarai", "Belgaum", "Bellary", "Berhampurganjam", "Bettiah", "Bhadrak", "Bhagalpur", "Bhagsunag", "Bharuch", "Bhavnagar", "Bhilai", "Bhilwara", "Bhiwadi", "Bhiwandi", "Bhiwani", "Bhopal", "Bhubaneswar", "Bhunter", "Bidar", "Bijapur", "Bikaner", "Bilaspur", "Bir", "Bodakdev", "Bokaro", "Bolangir", "Bolpur", "Bongaigaon", "Bulandshahr", "Bundi", "Burdwan", "Chakan", "Chandernagore", "Chandigarh", "Chandrapur", "Chennai", "Chhindwara", "Chickmagalur", "Chillakallu", "Chinnamiram", "Chiplun", "Chittoor", "Churu", "Coimbatore", "Contai", "Cuddalore", "Cuttack", "Dahod", "Dalhousie", "Daman", "Dankuni", "Darbhanga", "Darjeeling", "Dasuya", "Davangere", "Deesa", "deharadun", "Dehradun", "Delhi", "Deoghar", "Derabassi", "Dewas", "Dhamtari", "Dhanbad", "Dharmshala", "Dharwad", "Dhenkanal", "Dhule", "Dibrugarh", "Dilsukh Nagar", "Dimapur", "Dindigul", "Dindori", "Durg", "Durgapur", "Edarapalli", "Ernakulam", "Erode", "Faizabad", "Faridabad", "Faridkot", "Farrukhabad", "Fatehabad", "Fatehpur", "Ferozepur", "Firozabad", "Fulia", "Gadag", "Gandhidham", "Gandhinagar", "Gangawati", "Gangtok", "Gardhiwal", "Garhshankar", "Gawli Palasia", "Gaya", "Ghaziabad", "Giridih", "Godhra", "Gokak", "Gorakhpur", "Greater Noida", "Gudivada", "Gulbarga", "Guna", "Guntur", "Gurdaspur", "Gurugram / Gurgaon", "Guwahati", "Gwalior", "Habra", "Haldia", "Hanmakonda", "Hanumangarh", "Haridwar", "Hassan", "Hazaribagh", "Himatnagar", "Hissar", "Hooghly", "Hoshangabad", "Hoshiarpur", "Hospet", "Hosur", "Howrah", "Hubli", "Hyderabad", "Ichalkaranji", "Ilanji", "Imphal", "Indore", "Islampur Branch", "Itanagar", "Itarsi", "Jabalpur", "Jagraon", "Jaipur", "Jajpur Road", "jalandar", "Jalandhar", "Jalgaon", "Jalna", "Jalpaiguri", "Jamkhandi", "Jammu", "Jamnagar", "Jamshedpur", "Jangareddigudem", "Jaunpur", "Jeypore", "Jhansi", "Jharsuguda", "Jhunjhunu", "Jodhpur", "Jorhat", "Junagadh", "Kadapa", "Kadayanallur", "Kaithal", "Kakinada", "Kalimpong", "Kalna", "Kalol", "Kalyan", "Kalyani", "Kancheepuram", "Kanhangad", "Kannur", "Kanpur", "Kanyakumari", "Kapurthala", "Karaikudi", "Karimnagar", "Karnal", "Karur", "Karwar", "Kasargod", "Kashipur", "Kasia", "Katni", "Katwa", "Keonjhar", "Khammam", "Khandwa", "Khanna", "Kharagpur", "Koch Bihar", "Kochi", "Kohima", "Kolhapur", "Kolkata", "Kollam", "Korba", "Kota", "Kotkapura", "Kottayam", "Kozhikode", "Krishnanagar", "Kukatpally", "Kumbakonam", "Kurnool", "Kurukshetra", "Lakhimpur Kheri", "Lambra", "Lasalgaon", "Latur", "Leh", "Lucknow", "Ludhiana", "Machilipatnam", "Madgaon", "Madhapar", "Madurai", "Mahasamund", "Mahestala", "Mahilpur", "Malappuram", "Malda", "Malerkotla", "Malout", "Manali", "Mandsaur", "Mangalore", "Mansa", "Margao", "Marmagao", "Mathura", "Mau", "Mayiladuthurai", "McLeod Ganj", "Meerut", "Mehsana", "Memari", "Midnapur", "Miller Ganj", "Miryalguda", "Mirzapur", "Moga", "Mohali", "Moradabad", "Morbi", "Mumbai", "Mundra", "Mussoorie", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nabha", "Nadiad", "Nagaon", "Nagapattinam", "Nagercoil", "Nagpur", "Nakodar", "Nanded", "Nandyal", "Narasaraopet", "Nashik", "Navi Mumbai", "Navsari", "Nawanshahar", "Neemuch", "Nellore", "Nizamabad", "Noida", "Nurpurbedi", "Ongole", "Ootacamund", "Padampur", "Paidiparru", "Pala", "Palai", "Palakkad", "Palanpur", "Palasia", "Palwal", "Panchkula", "Pandri", "Panihati", "Panipat", "Panji", "Panjim", "Panvel", "Patan", "Patancheru", "Pathanamthitta", "Pathankot", "Patiala", "Patna", "Patti", "Pehowa", "peravallur", "Phagwara", "Phillaur", "Phullanwal", "Pilibhit", "Pimpalgaon", "Pollachi", "Pondicherry", "Poolapalle", "Porbandar", "Port Blair", "Proddatur", "Pudukottai", "Punalur", "Pune", "Purasawalkam", "Puri", "Purnia", "Puruliya", "Puttaparty", "Rai Bareli", "Raichur", "Raiganj", "Raigarh", "Raipur", "Rajahmundry", "Rajapalayam", "Rajarhat", "Rajkot", "Rajnandgaon", "Rajpipla", "Rajpura", "Ramgarh", "Ranchi", "Rangpo", "Ratlam", "Ratnagiri", "Rayagada", "Rayya", "Razole", "Rewa", "Rewari", "Rishikesh", "Rishra", "Rohtak", "Roorkee", "Rourkela", "Rudrapur", "Rupnagar", "Sadaura", "Sagar", "Saharanpur", "Saidapur", "Salem", "Samana", "Sambalpur", "Sanganer", "Sangli", "Sangrur", "Satara", "Sathyamangalam", "Satna", "Secunderabad", "Sehore", "Serampore", "Shillong", "Shimla", "Shimoga", "Shirdi", "Sidhi", "Silchar", "Siliguri", "Sindhnur", "Singur", "Sirsa", "Sitapur", "Sivakasi", "Solan", "Solapur", "Sonipat", "Sri Ganganagar", "Srikakulam", "Sudhar", "Sujangarh", "Sultanpur", "Sunder Nagar", "Surat", "Surendranagar", "Suri", "Tagore Nagar", "Talli haldwani", "talli haldwani", "Tamluk", "Tanda", "Taramani", "Tarn Taran", "Tasgaon", "Tenali", "Tezpur", "Thalassery", "Thane", "Thanjavur", "Theni", "Thiruvalla", "Thiruvalur", "Thiruvananthapuram", "Thiruvarur", "Thodupuzha", "Threeke", "Thrissur", "Tinsukia", "Tiruchengode", "Tiruchirapalli", "Tirunelveli", "Tirupur", "Tirur", "Trichur", "Tumkur", "Tura", "Tuticorin", "Udaipur", "Udupi", "Ujjain", "Ulhasnagar", "Una", "Urapar", "Vadakara", "Vadodara", "vadodora", "vadodra", "Vallabh Vidyanagar", "Valsad", "Vapi", "Varanasi", "Varkala", "Vasco", "Vastrapur", "Vellore", "Veraval", "Verka", "Vidisha", "Vidyanagar", "Vijayawada", "Villupuram", "Virugambakkam", "Visakhapatnam", "vishakapatnam", "Visnagar", "vizag", "Vizianagaram", "waidhan", "Warangal", "Yamunanagar", "Yavatmal"];
        this.currencys = ["US Dollar", "Euro", "British Pound", "Australian Dollar", "Canadian Dollar", "Singapore Dollar", "New Zealand Dollar", "Hong Kong Dollar", "UAE Dirham", "Saudi Riyal", "Swiss Franc", "Japanese Yen", "Swedish Krona", "Thai Baht", "Malaysian Ringgits", "Chinese Yuan", "South African Rand", "Omani", "Rial", "Bahraini Dinar", "Kuwaiti Dinar", "Norwegian Krone", "Danish Krone", "Indonesian Rupiah", "Sri Lankan Rupee", "Korean Won", "Russian Ruble", "Philippine Peso", "Vietnam Dong", "Mauritius Rupee", "Bangladesh Taka"];
        this.products = ["FOREX CARD ", "CURRENCY NOTES", "TRAVELLERS CHEQUE"];
        this.id = 1;
        this.orderitem = new __WEBPACK_IMPORTED_MODULE_1__orderitem__["a" /* orderlistitem */](0, "", "", "", 0, 0);
        this.ORDERITEM = [];
        this.rate = 67.25;
        this.error = false;
        this.showTable = false;
        this.totalAmountofCart = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    // allowing only 11 digits typed in the forex and inr input  on keypress
    HomeComponent.prototype.validate = function (e) {
        if (e.length < 10) {
            return true;
        }
        else {
            return false;
        }
    };
    // set the forex ammount using ng model
    HomeComponent.prototype.setforex = function (e) {
        var fmoney = this.inramount / this.rate;
        this.famount = fmoney.toFixed(2);
    };
    // set the inr ammount using ng model
    HomeComponent.prototype.setinr = function (e) {
        var inrmoney = this.famount * this.rate;
        this.inramount = inrmoney.toFixed(2);
    };
    // add product method
    HomeComponent.prototype.addProduct = function () {
        //intialise the variables
        var currentlocation;
        var currentcurrency;
        var currentproduct;
        var currentforex;
        var currentINR;
        // get location and validate
        if ($("#listLocation").select2("val") > 0) {
            currentlocation = this.locations[$("#listLocation").select2("val") - 1];
            this.error = false;
        }
        else {
            this.error = true;
        }
        // get currency and validate
        if ($("#listCurrency").select2("val") > 0) {
            currentcurrency = this.currencys[$("#listCurrency").select2("val") - 1];
            this.error = false;
        }
        else {
            this.error = true;
        }
        // get product and validate
        if ($("#listProduct").select2("val") > 0) {
            currentproduct = this.products[$("#listProduct").select2("val") - 1];
            this.error = false;
        }
        else {
            this.error = true;
        }
        // get forex amount and validate
        if (this.famount > 0) {
            currentforex = this.famount;
            currentINR = this.inramount;
            this.error = false;
        }
        else {
            this.error = true;
        }
        // reset the template
        $("#listLocation").val('').trigger('change');
        $("#listCurrency").val('').trigger('change');
        $("#listProduct").val('').trigger('change');
        this.famount = null;
        this.inramount = null;
        // create table and display
        if (!this.error) {
            this.showTable = true;
            this.orderitem.location = currentlocation;
            this.orderitem.Currency = currentcurrency;
            this.orderitem.Product = currentproduct;
            this.orderitem.ForexAmount = currentforex;
            this.orderitem.INRAmount = currentINR;
            this.addorderitem();
            this.calculateTotalAmount();
        }
    };
    // adding an new record to the array
    HomeComponent.prototype.addorderitem = function () {
        this.id += 1;
        var orderEntry = new __WEBPACK_IMPORTED_MODULE_1__orderitem__["a" /* orderlistitem */](this.id, this.orderitem.location, this.orderitem.Currency, this.orderitem.Product, this.orderitem.ForexAmount, this.orderitem.INRAmount);
        this.ORDERITEM.push(orderEntry);
        this.resetorderitem();
    };
    // deleting new item to array
    HomeComponent.prototype.deleteorderitem = function (id) {
        for (var i = this.ORDERITEM.length - 1; i >= 0; i--) {
            if (this.ORDERITEM[i].id === id) {
                this.ORDERITEM.splice(i, 1);
            }
        }
        if (this.ORDERITEM.length === 0) {
            this.showTable = false;
        }
        this.calculateTotalAmount();
    };
    // resetting this object to accept new one 
    HomeComponent.prototype.resetorderitem = function () {
        this.orderitem.Currency = '';
        this.orderitem.Product = '';
        this.orderitem.ForexAmount = null;
        this.orderitem.INRAmount = null;
    };
    HomeComponent.prototype.calculateTotalAmount = function () {
        this.totalAmountofCart = 0;
        for (var i = this.ORDERITEM.length - 1; i >= 0; i--) {
            var am = parseFloat(this.ORDERITEM[i].INRAmount);
            this.totalAmountofCart = am + this.totalAmountofCart;
        }
        console.log(this.totalAmountofCart);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'home-root',
            template: __webpack_require__(635),
            styles: [__webpack_require__(630)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/home.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(636),
            styles: [__webpack_require__(631)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/login.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderlistitem; });
var orderlistitem = (function () {
    function orderlistitem(id, location, Currency, Product, ForexAmount, INRAmount) {
        this.id = id;
        this.location = location;
        this.Currency = Currency;
        this.Product = Product;
        this.ForexAmount = ForexAmount;
        this.INRAmount = INRAmount;
    }
    return orderlistitem;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/orderitem.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(637),
            styles: [__webpack_require__(632)]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=D:/ngP/projects/ng5/src/register.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=D:/ngP/projects/ng5/src/environment.prod.js.map

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = ".slide-wrapper {\r\nposition: relative;\r\n  \r\n}\r\n\r\n\r\n.alignCenter{\r\n    text-align: center;\r\n}\r\n\r\n.topholder {\r\n    z-index: 100;\r\n    margin-right: auto;\r\n    margin-left: auto; \r\n    border:1px solid green;\r\n    background-color: azure;\r\n\r\n}\r\n\r\n\r\n@media (min-width: 768px) { \r\n    .carousel-caption {\r\n        text-align: left;\r\n        padding-right: 300px;\r\n    }\r\n    .topholder {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        margin-top:2%;\r\n        margin-left:45%;\r\n    }\r\n\r\n    .orderForm{\r\n        min-width:500px;\r\n           \r\n    }\r\n    \r\n\r\n}\r\n\r\n\r\n/* MISC */\r\n#homepage-feature .item {\r\n    overflow: hidden;\r\n    height: 400px;\r\n    background-color: transparent;\r\n    background-size: cover;\r\n}\r\n#homepage-feature > .carousel-control {\r\n    width: 30px;\r\n    font-size: 40px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    opacity: 1;\r\n}\r\n#homepage-feature > .carousel-control span {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -30px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 577px) {\r\n  .borderb{\r\n      border-right:1px solid #003f74;\r\n\r\n  }\r\n\r\n  .fontBottomlittle{\r\n    font-size:20px; \r\n\r\n   }\r\n \r\n }\r\n\r\n @media (max-width: 576px) {\r\n   .borderb{\r\n       border-bottom:1px solid #003f74;\r\n    \r\n   }\r\n\r\n   .marginBottom{\r\n    margin-bottom:15px; \r\n\r\n   }\r\n\r\n   .fontBottom{\r\n    font-size:15px; \r\n\r\n   }\r\n   .fontBottomlittle{\r\n    font-size:12.5px; \r\n\r\n   }\r\n\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n * {\r\n     box-sizing: border-box;\r\n }\r\n\r\n.footer a {\r\ncolor:#ffffff;\r\n\r\n}\r\n .d-inline-flex a{\r\n   color:#ffb500;\r\n   } \r\n\r\n.navbar-nav > li{\r\n  margin-left:40px;\r\n  margin-right:40px;\r\n}\r\n\r\n.carousel-inner img {\r\n     width: 100%;\r\n     height: 100%;\r\n }\r\n\r\n button{\r\n     cursor: pointer;\r\n }\r\n\r\n "

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<home-root> </home-root>\r\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"border:1px solid green;\" >\n          <div class=\"d-inline-flex p-2 \"   style=\"width: 100%;text-align:center;border-top:1px solid #ffb500;color:#ffb500\">\n <!-- phone number -->\n              <div class=\"col-lg-2.5 m-r-4\"  style=\"white-space:nowrap;\">\n                  <div style=\"display:inline;\">\n                    <img  src=\"assets/images/bp.png\" />\n                  </div>\n                  <div style=\"display:inline;font-size:12px; white-space:nowrap;color:#ffb500;\">1800 123 3066</div>\n              </div>\n <!-- mail -->\n              <div class=\"col-lg-2 d-none d-md-block \"  style=\"white-space:nowrap;\">\n                  <div style=\"display:inline;\">\n                    <img  src=\"assets/images/mail.png\" />\n                  </div>\n                  <div style=\"display:inline;font-size:12px; white-space:nowrap;color:#ffb500;\">forex@nishiforex.com</div>\n              </div>\n<!-- Live Rates -->\n\n            <div class=\"col-lg-4 d-none d-sm-block\" style=\"font-weight:bold;color:#ffb500;font-size:20px;width: 100%;\">\n              <a href=\"1\">Live Rates</a>\n            </div>\n            <div class=\"col-lg-2 d-none d-sm-block\" style=\"color:#ffb500;font-size:20px;width: 100%;\">\n              <a href=\"1\">About Us</a>\n            </div>\n            <div class=\" col-lg d-none d-sm-block\" style=\"color:#ffb500;font-size:20px;width: 100%;\">\n              <a href=\"1\">Services</a>\n            </div>\n            <div class=\"col-lg-2\" style=\"padding-top: 8px;font-size:13px;color:#ffb500;font-weight:bold\">\n              <a  href=\"1\">Login</a>/<a href=\"sa\">Register</a>\n            </div>\n\n          </div>\n\n\n  <nav class=\"navbar navbar-expand-md bg-light navbar-light \" data-spy=\"affix\"  style=\" font-weight:bold;border-top:1px solid #ffb500;border-bottom:1px solid #ffb500;\">\n  <a class=\"navbar-brand \" href=\"#\">\n      <img src=\"assets/images/logo.png\" alt=\"Logo\" style=\"width:100px;\">\n  </a>\n  <button class=\"navbar-toggler\" style=\"background:#ffb500\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div style=\"float:right\" class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <div class=\"row \" style=\"justify-content: flex-end;\" >\n      <div  class=\"col-sm-2 \">\n        <a class=\"nav-link\" style=\"color:#ffb500; margin-left:20px;margin-right:20px;\"  href=\"#\">Buy Forex</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#ffb500; margin-left:20px;margin-right:20px;\"  href=\"#\">Sell Forex</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#ffb500; margin-left:20px;margin-right:20px;\"  href=\"#\">Money Transfer</a>\n      </div>\n      <div  class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#ffb500; margin-left:20px;margin-right:20px;\"  href=\"#\">Forex Card</a>\n      </div>\n      <div class=\"col-sm-2\">\n        <a class=\"nav-link\" style=\"color:#ffb500; margin-left:20px;margin-right:20px;\"  href=\"#\">Travel Insurance</a>\n      </div>\n    </div>\n  </div>\n</nav>\n<br>\n\n\n\n<div style=\"color:#003f74;font-weight:bold\">\n<p class=\"text-center\">In a hurry ?</p>\n<p class=\"text-center\">Drop in Your Contact Details & We'll call you right back </p>\n\n<form class=\"form-inline justify-content-center\" >\n  <div class=\"col-lg-2.5 m-r-4\"  style=\"white-space:nowrap;padding-bottom:5px\">\n      <div style=\"display:inline;\">\n        <img  src=\"assets/images/bp.png\" />\n      </div>\n      <div style=\"display:inline; white-space:nowrap; color:#003f74;\"> Request a call back &nbsp; &nbsp; </div>\n\n  </div>\n\n  <input type=\"text\" style=\"float:right;border:1px solid #003f74\" placeholder=\"Name\" class=\"form-control mb-2 mr-sm-2\" id=\"name\">\n  <input type=\"email\" style=\"float:right;border:1px solid #003f74\" placeholder=\"E-mail\" class=\"form-control mb-2 mr-sm-2\" id=\"email\">\n  <input type=\"number\" style=\"float:right;border:1px solid #003f74\" placeholder=\"Mobile No.\" class=\"form-control mb-2 mr-sm-2\" id=\"mnumber\">\n  <button id=\"qry\" type=\"submit\" class=\"btn btn-primary mb-2\">Call Me</button>\n</form>\n\n</div>\n<br>\n<!-- order template -->\n\n\n<div class=\"slide-wrapper\">\n\n<div id=\"nishi\" class=\"carousel slide\" data-pause=\"hover\"  data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#nishi\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"1\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"2\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"3\"></li>\n    <li data-target=\"#nishi\" data-slide-to=\"4\"></li>\n  </ol>\n\n\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"assets/images/slide1.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/slide2.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"assets/images/slide3.png\" alt=\"SliderImg\" width=\"1100\" height=\"200\">\n    </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#nishi\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#nishi\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n\n\n<div class=\"topholder\">\n    <div id=\"erroralert\" *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\">\n        <strong>Alert !</strong>   Please Fill all the fields.\n    </div>\n\n    <form class=\"form-control orderForm\" id=\"orderForm\" > \n         <div  class=\"row p-2 \" >\n              <div  class=\"col marginBottom fontBottom\">\n                  <select style=\"width: 100%\" id=\"listLocation\"><option></option></select>\n              </div>\n              <div class=\"col fontBottom\">\n                  <select  style=\"width: 100%\" id=\"listCurrency\"><option></option></select>\n              </div>\n        </div>\n        <div class=\"row p-2\">\n            <div class=\"col fontBottom\">\n                <select  style=\"width: 100%\" id=\"listProduct\"><option></option></select>\n            </div>\n\n          </div>\n          <div class=\"row p-2\">\n              <div  class=\"col\">\n                  <div style=\"width:100%\" class=\"form-control\">\n                    <i style='color: #003f74;font-size:20px;' class='fa fa-money' ></i>\n                    <input (keypress)=\"validate($event.target.value)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)] =\"famount\" (keyup)=\"setinr($event.target.value)\"  style=\"font-weight:bold;width:55%;margin-left:20px;border:0;text-align:left;\" type=\"number\"  class=\"marginBottom fontBottomlittle \" placeholder=\"Forex Amount\">\n                     <span style=\"display:inline-block;margin-left:10px;font-size:13px\"> <i style='color: #003f74;font-size:20px;' class='fa fa-bar-chart' ></i> Rate = <!--<i style='color: #003f74;font-size:15px;' class='fa fa-inr' ></i> -->{{rate | currency:'INR':'symbol'}}</span> \n                  </div>\n              </div>\n            </div>\n          <div class=\"row p-2\">\n              <div class=\"col\">\n                  <div style=\"width:100%\" class=\"form-control\">\n                      <i style='color: #003f74;font-size:20px;' class='fa fa-money' ></i>\n                      <input (keypress)=\"validate($event.target.value)\" class=\"fontBottomlittle\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)] =\"inramount\" (keyup)=\"setforex($event.target.value)\" style=\"font-weight:bold;width:55%; text-decoration: none;margin-left:20px;border:0;text-align:left\" type=\"number\"  placeholder=\"INR Amount\">\n                    </div>\n              </div>\n            </div>\n            <div class=\"row p-2\">\n                <div class=\"col\">\n                 \n                </div>\n                <div class=\"col\">\n                    <button (click)=\"addProduct()\" style=\"background-color: #ffb500;width:100%;display: block; margin: 0 auto;\" type=\"button\" class=\"btn btn-primary\">Add Product</button>\n                  </div>\n              </div>\n\n             \n                  <div class=\"table-responsive fontBottomlittle marginBottom \">\n                  <table style=\"font-size:14px\" class=\"table\">\n                      <thead  *ngIf =\"showTable\">\n                            <th>Currency</th>\n                            <th>Product</th>\n                            <th>Forex Amount</th>\n                            <th>INR Amount</th>\n                            <th>Action</th>\n                        </thead>\n                        <tbody>   \n                            <tr *ngFor=\"let order of ORDERITEM \">\n                                <td>{{order.Currency}}</td>\n                                <td>{{order.Product}}</td>\n                                <td>{{order.ForexAmount}}</td>\n                                <td>{{order.INRAmount}}</td>\n                                <td  style=\"font-size:20px;text-align: center;cursor:pointer\"><i  class='fa fa-trash' (click)=\"deleteorderitem(order.id)\" aria-hidden='true'></i> </td>\n                            </tr>\n                        </tbody>\n                </table>\n                </div>\n\n\n            <div class=\"fontBottomlittle marginBottom\" id=\"totalCostofOrder\">\n              <div ><i style=\"font-size:30px;color:#003f74\" class=\"fa fa-shopping-cart\"></i>&nbsp;&nbsp;<i style=\"font-size:30px;color:#003f74\" class=\"fa fa-inr\"> {{totalAmountofCart|number:'2.2-3'}}</i></div>\n\n            </div>  \n               \n          <div style=\"margin-top:10px;\" class=\"row p-2\">\n              <div class=\"col\">\n                  <button style=\"background-color: #ffb500;width:50%;display: block; margin: 0 auto;\" type=\"button\" class=\"btn btn-primary\">Book this Order</button>\n              </div>\n            </div> \n      </form> \n      \n  </div>\n\n  </div>\n\n\n<br>\n\n<br>\n\n<div id=\"rate\" class=\"carousel slide\" data-interval=\"3000\"   data-ride=\"carousel\">\n\n\n  <!-- <ol class=\"carousel-indicators\">\n    <li data-target=\"#cust_review\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"1\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"2\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"3\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"4\"></li>\n  </ol> -->\n\n  <div class=\"carousel-inner  text-center\" style=\"border-radius:10px;border:1px solid #003f74 \" width=\"1100\" height=\"80\">\n    <div class=\"carousel-item active\">\n      <div class=\"row py-3\" style=\"color:#000000;font-weight:bold;font-size:13px\">\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 \">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"row py-3\" style=\"color:#000000;font-weight:bold;font-size:13px\">\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 \">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"row py-3\" style=\"color:#000000;font-weight:bold;font-size:13px\">\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 \">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"row py-3\" style=\"color:#000000;font-weight:bold;font-size:13px\">\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 \">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"row py-3\" style=\"color:#000000;font-weight:bold;font-size:13px\">\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div  class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 borderb\">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n        <div class=\"col-sm-3 \">\n            <div  class=\"col\">U S Dollor </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">BUY 0.00 </div>\n            <div class=\"w-100 d-none d-md-block\"></div>\n            <div class=\"col\">SELL 0.00 </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#rate\" data-slide=\"prev\">\n     <span  class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#rate\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n</div>\n<br>\n\n  <button style=\"background-color: #ffb500;width:50%;display: block; margin: 0 auto;\" type=\"button\" class=\"btn btn-primary\">See Full Rate Card</button>\n<br>\n\n<br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <img style=\"display: block; margin: 0 auto;padding: 3px;\" src=\"assets/images/img1.png\" alt=\"callback\" />\n      <button style=\"background-color: #ffb500;width: 100%;display: block; margin: 0 auto;\"  class=\"btn\">Request Call Back</button>\n    </div>\n    <div class=\"col\">\n      <img style=\"display: block; margin: 0 auto;padding: 3px;\" src=\"assets/images/img2.png\" alt=\"rateAlert\" />\n      <button style=\"background-color: #ffb500;width: 100%;display: block; margin: 0 auto;\"  class=\"btn\">Set Rate Alert</button>\n    </div>\n    <div class=\"col\">\n      <img style=\"display: block; margin: 0 auto;padding: 3px;\" src=\"assets/images/img3.png\" alt=\"RequestBeterRat\" />\n      <button style=\"background-color: #ffb500;width: 100%;display: block; margin: 0 auto;\"  class=\"btn\">Request Better Rate</button>\n    </div>\n    <div class=\"col\">\n      <img style=\"display: block; margin: 0 auto;padding: 3px;\" src=\"assets/images/img4.png\" alt=\"TourTravl\"/>\n      <button style=\"background-color: #ffb500;width: 100%;display: block; margin: 0 auto;\"  class=\"btn\">Tour and Travel</button>\n    </div>\n  </div>\n<br>\n<br>\n\n<div id=\"cust_review\" class=\"carousel slide\"  data-ride=\"carousel\">\n\n\n  <!-- <ol class=\"carousel-indicators\">\n    <li data-target=\"#cust_review\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"1\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"2\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"3\"></li>\n    <li data-target=\"#cust_review\" data-slide-to=\"4\"></li>\n  </ol> -->\n\n\n  <div class=\"carousel-inner  text-center\" style=\"background-color:#61cce6;border-radius:10px\" width=\"1100\" height=\"80\">\n    <div class=\"carousel-item active\">\n      <h4 style=\"color:#ffffff\">Tom - Assistant Manager</h4>\n      <p >  Abuses akin to ballot stuffing of favourable reviews by the seller, or negative reviews by competitors, need to be policed by the review host site. Since few sites restrict users to reviewing only items purchased from that site, it is difficult to prove a customer has actually used the product they are reviewing.</p>\n    </div>\n    <div class=\"carousel-item\">\n      <h4 style=\"color:#ffffff\">Mike - Travellor</h4>\n      <p>  Abuses akin to ballot stuffing of favourable reviews by the seller.</p>\n    </div>\n    <div class=\"carousel-item\">\n      <h4 style=\"color:#ffffff\">Ben - Artist</h4>\n      <p>  Abuses akin to ballot stuffing of favourable reviews by the seller.</p>\n    </div>\n    <div class=\"carousel-item\">\n      <h4 style=\"color:#ffffff\">Rack - Business Manager</h4>\n      <p>  Abuses akin to ballot stuffing of favourable reviews by the seller.</p>\n    </div>\n    <div class=\"carousel-item\">\n      <h4 style=\"color:#ffffff\">Tise</h4>\n      <p>  Abuses akin to ballot stuffing of favourable reviews by the seller.</p>\n    </div>\n  </div>\n\n\n  <a class=\"carousel-control-prev\" href=\"#cust_review\" data-slide=\"prev\">  </a>\n  <a class=\"carousel-control-next\" href=\"#cust_review\" data-slide=\"next\">  </a>\n</div>\n<br>\n<div class=\"row py-3\" style=\"border-bottom:1px solid #ffb500;color:#000000;font-weight:bold;font-size:13px\">\n  <div class=\"col-md-3\">\n      <div style=\"font-size:25px\" class=\"col\">Services </div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Currency Exchange Services </div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Prepaid Travel Forex Card</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">International Money Transfers</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Product & Services</div>\n  </div>\n  <div class=\"col-md-3\">\n      <div style=\"font-size:25px\" class=\"col\">Help</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">FAQS</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Terms and Condtions</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Offers</div>\n      <div class=\"w-100 d-none d-md-block\"></div>\n      <div class=\"col\">Disclaimer</div>\n  </div>\n  <div class=\"col-md-3\">\n    <div style=\"font-size:25px\" class=\"col\">Contact Us</div>\n    <div class=\"w-100 dmdone d-md-block\"></div>\n    <div class=\"col\">Nishi Forex & Leisure Pvt.Ltd.</div>\n    <div class=\"w-100 d-none d-md-block\"></div>\n    <div class=\"col\">No:536, Amar Jyothi Layout, 100 Feet Intermediate Ring Road, Banglore - 560071</div>\n  </div>\n  <div  class=\"col-md-3\">\n    <div style=\"font-size:25px\" class=\"col\">Need Nishi Help?</div>\n    <div class=\"w-100 d-none d-md-block\"></div>\n    <div class=\"col\">We would be more happy to help you.</div>\n    <div class=\"w-100 d-none d-md-block\"></div>\n    <div class=\"col\">Our Team Advisor are 24/7 at your service to help you.</div>\n    <h2><span style=\"background-color:#003f74\" class=\"badge badge-secondary\"> &#9990; 1800 123 3066</span></h2>\n  </div>\n</div>\n<br>\n  <p  class=\"text-center  align-baseline\" style=\"font-size:25px;font-weight:bold;color:#ffb500; text-shadow: 2px 2px 4px #cccccc\">Like, Follow & Review Us On:</p>\n  <div  class=\"row justify-content-center\" >\n      <img style=\"padding:3px\" src=\"assets/images/f.png\" alt=\"facebook\" >\n      <img style=\"padding:3px\" src=\"assets/images/o.png\" alt=\"o\" >\n      <img style=\"padding:3px\" src=\"assets/images/t.png\" alt=\"twiter\" >\n      <img style=\"padding:3px\" src=\"assets/images/f.png\" alt=\"twiter\" >\n  </div>\n<br>\n\n  <footer class=\"footer\" >\n       <div class=\"container center\">\n         <div class=\"row justify-content-left\" style=\"background-color:#ffb500;\">\n           <a class=\"nav-link js-scroll-trigger\" > &copy;2015 - 2018 Nishi Forex & Leisure Pvt.Ltd. All Rights Reserved</a>\n         </div>\n       </div>\n    </footer>\n   \n</div>\n\n\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(348);


/***/ })

},[668]);
//# sourceMappingURL=main.bundle.map