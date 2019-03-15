(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>CoE EATS</title>\n<app-header></app-header>\n<app-table></app-table>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CoEEATS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./request-form/request-form.component */ "./src/app/request-form/request-form.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_14__["RequestFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"]
            ],
            entryComponents: [
                _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_14__["RequestFormComponent"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"content\">\n        <a routerLink=\"/header\"></a><h1>{{ title }}</h1>\n        <!-- <button mat-raised-button class=\"apply\" (click)=\"reqDialog()\">Request</button> -->\n\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #171D75;\n  font-family: Verdana;\n  color: white;\n  padding: 25px;\n  width: 100%; }\n  header .content {\n    padding-left: 16px;\n    text-align: center; }\n  header .content h1 {\n      display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWFyb24vRG9jdW1lbnRzL0VtcGxveWVlX0Rhc2hib2FyZC93ZWIvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVcsRUFBQTtFQUxmO0lBUVEsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBVDFCO01BV1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzE3MUQ3NTtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDF7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-form/request-form.component */ "./src/app/request-form/request-form.component.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
        this.title = 'CoE E.A.T.S';
    }
    HeaderComponent.prototype.reqDialog = function () {
        var dialogRef = this.dialog.open(_request_form_request_form_component__WEBPACK_IMPORTED_MODULE_3__["RequestFormComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:3003';
    }
    HttpService.prototype.getAllEmployeeData = function () {
        return this.httpClient.get(this.apiURL + "/api/attendance").toPromise();
    };
    HttpService.prototype.getPendingData = function () {
        return this.httpClient.get(this.apiURL + "/api/pending").toPromise();
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/request-form/request-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/request-form/request-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"reqForm\" (ngSubmit)=\"onSubmit()\">\n    <!-- <div class= \"formGroup\"> -->\n    <h2 mat-dialog-title>Request leave</h2>\n    <mat-dialog-content>\n<!--Domain ID input-->\n  <mat-form-field>\n    <div class=\"form-group\" [ngClass]=\"{ 'is-invalid': reqForm.get('staffID').errors}\">\n      <input matInput placeholder=\"Domain ID\" formControlName=\"staffID\" />\n  </div>\n  </mat-form-field>\n  <br>\n  <!--Leave option-->\n  <mat-form-field>\n      <mat-select placeholder=\"Select Leave\" #leaveSelect formControlName=\"leaveSelect\">\n        <mat-option aria-placeholder=\"Select Leave\" style=\"color: lightgrey;\" >-- Select Leave--</mat-option>  \n        <mat-option value=\"Medical Leave\">Medical Leave</mat-option>\n        <mat-option value=\"Annual Leave\">Annual Leave</mat-option>\n      </mat-select>\n    </mat-form-field>\n  <br>\n  <!--From Date Selector-->\n  <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"From\" formControlName=\"fromDate\"/>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n\n  <br>\n  <!--To Date Selector-->\n  <mat-form-field>\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"To\" formControlName=\"toDate\"/>\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1></mat-datepicker>\n  </mat-form-field>\n</mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button class=\"close\" (click)='close()'>Cancel</button>\n      <span></span>\n    <button mat-raised-button class=\"request\" (click)='request()' type=\"submit\">Request</button>\n  </mat-dialog-actions>\n\n<!-- </div> -->\n</form>\n</div>"

/***/ }),

/***/ "./src/app/request-form/request-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/request-form/request-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  width: 50%;\n  height: 40px;\n  border-radius: 20px;\n  font-size: 12px; }\n\n.close:hover {\n  background-color: darkgrey; }\n\n.container {\n  width: 450px; }\n\n.container .request {\n    background-color: #5cce5c;\n    color: black;\n    justify-content: right;\n    display: inline; }\n\n.container .request:hover {\n      background-color: lightgreen; }\n\n.container .error {\n    color: red;\n    font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWFyb24vRG9jdW1lbnRzL0VtcGxveWVlX0Rhc2hib2FyZC93ZWIvc3JjL2FwcC9yZXF1ZXN0LWZvcm0vcmVxdWVzdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUluQjtFQUVRLDBCQUEwQixFQUFBOztBQUlsQztFQUNJLFlBQVksRUFBQTs7QUFEaEI7SUFHUSx5QkFBa0M7SUFDbEMsWUFBWTtJQUNaLHNCQUFzQjtJQUV0QixlQUFlLEVBQUE7O0FBUHZCO01BU1ksNEJBQTRCLEVBQUE7O0FBVHhDO0lBYVEsVUFBUztJQUNULGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZm9ybS9yZXF1ZXN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257IFxuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIC8vcGFkZGluZzogMzBweDtcblxufVxuLmNsb3Nle1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAgIH1cbn1cblxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgLnJlcXVlc3R7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMjA2LCA5Mik7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAgICAgLy9yaWdodDo1MTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZXJyb3J7XG4gICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/request-form/request-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/request-form/request-form.component.ts ***!
  \********************************************************/
/*! exports provided: RequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormComponent", function() { return RequestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RequestFormComponent = /** @class */ (function () {
    function RequestFormComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
    }
    RequestFormComponent.prototype.ngOnInit = function () {
        this.reqForm = this.formBuilder.group({
            staffID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            leaveSelect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (localStorage.getItem('AL_SAVED') === null) {
            localStorage.setItem('AL_SAVED', '[]');
        }
        if (localStorage.getItem('MC_SAVED') === null) {
            localStorage.setItem('MC_SAVED', '[]');
        }
    };
    RequestFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.reqForm.invalid) {
            return;
        }
        else if (this.reqForm.valid) {
            this.dialogRef.close('Request sent');
            console.log('Staff Id: ', this.reqForm.value.staffID, '\n', 'Select: ', this.reqForm.value.leaveSelect, '\n', 'From: ', this.reqForm.value.fromDate, '\n', 'To: ', this.reqForm.value.toDate);
            this.success = true;
        }
    };
    RequestFormComponent.prototype.request = function () {
        this.submitted = true;
        if (this.reqForm.invalid) {
            return;
        }
        else if (this.reqForm.valid) {
            // const AL_SAVED_2 = {
            //   staffID: this.reqForm.value.staffID,
            //   status: 'Pending'
            // };
            // const ITEM_SAVED = JSON.parse(localStorage.getItem('AL_SAVED'));
            // ITEM_SAVED.push(AL_SAVED_2);
            // localStorage.setItem('AL_SAVED', JSON.stringify(ITEM_SAVED));
            // window.location.reload();
            var MC_SAVED_2 = {
                staffID: this.reqForm.value.staffID,
                status: 'Pending'
            };
            var ITEM_SAVED1 = JSON.parse(localStorage.getItem('MC_SAVED'));
            ITEM_SAVED1.push(MC_SAVED_2);
            localStorage.setItem('MC_SAVED', JSON.stringify(ITEM_SAVED1));
            window.location.reload();
            this.dialogRef.close('Request sent');
        }
        this.success = true;
    };
    RequestFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    RequestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-form',
            template: __webpack_require__(/*! ./request-form.component.html */ "./src/app/request-form/request-form.component.html"),
            styles: [__webpack_require__(/*! ./request-form.component.scss */ "./src/app/request-form/request-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RequestFormComponent);
    return RequestFormComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card class=\"checkIn\">\n    <mat-card-title>Check In</mat-card-title>\n    <table mat-table [dataSource]=\"checkIn\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n      \n        <!-- No Column -->\n        <ng-container matColumnDef=\"attendance_uid\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.attendance_uid }} </td>\n        </ng-container>\n      \n        <!-- StaffID Column -->\n        <ng-container matColumnDef=\"employeeName\">\n          <th mat-header-cell *matHeaderCellDef> Staff ID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.employeeName }} </td>\n        </ng-container>\n      \n        <!-- Time Column -->\n        <ng-container matColumnDef=\"clockIn\">\n          <th mat-header-cell *matHeaderCellDef> Clock In </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.clockIn }} </td>\n        </ng-container>\n      \n        <!-- Lateness Column -->\n        <ng-container matColumnDef=\"lateness\">\n          <th mat-header-cell *matHeaderCellDef> Lateness </th>\n          <td mat-cell *matCellDef=\"let element\"> {{ element.lateness }} </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  </mat-card>\n\n  \n  <mat-card class=\"pending\">\n      <mat-card-title>Pending</mat-card-title>\n      <table mat-table [dataSource]=\"Pending\" class=\"mat-elevation-z8\">\n        <!-- No Column -->\n          <ng-container matColumnDef=\"employee_uid\">\n              <th mat-header-cell *matHeaderCellDef> No. </th>\n              <td mat-cell *matCellDef=\"let element\"> {{ element.employee_uid }} </td>\n            </ng-container>\n        <!-- StaffID Column -->\n          <ng-container matColumnDef=\"employeeName\">\n            <th mat-header-cell *matHeaderCellDef>Staff ID</th>\n            <td mat-cell *matCellDef=\"let element\">{{ element.employeeName }}</td>\n          </ng-container>\n          \n          \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\n    \n        </table>\n    </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-title {\n  font-size: 30px; }\n\ntable {\n  width: 100%; }\n\n.container {\n  justify-content: center;\n  align-content: center;\n  padding: 40px;\n  display: flex; }\n\n.container .mat-card {\n    width: 60%;\n    background-color: lightgrey; }\n\n.container .pending {\n    width: 20%; }\n\n.top {\n  padding-left: 30px;\n  padding-bottom: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWFyb24vRG9jdW1lbnRzL0VtcGxveWVlX0Rhc2hib2FyZC93ZWIvc3JjL2FwcC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBSmY7SUFPSSxVQUFVO0lBQ1YsMkJBQTBCLEVBQUE7O0FBUjlCO0lBV0ksVUFBVSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDMwcHg7XG59XG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbi5jb250YWluZXJ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLm1hdC1jYXJke1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7XG4gIH1cbiAgLnBlbmRpbmd7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxufSBcbi50b3B7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ELEMENT_DATA = [];
var PENDING_DATA = [
// { no: 1, staffID: 'taaron'},
// { no: 2, staffID: 'tlucas'}
];
var TableComponent = /** @class */ (function () {
    function TableComponent(httpService) {
        this.httpService = httpService;
        this.displayedColumns = ['attendance_uid', 'employeeName', 'clockIn', 'lateness'];
        this.displayedColumns3 = ['employee_uid', 'employeeName'];
        this.checkIn = ELEMENT_DATA;
        this.Pending = PENDING_DATA;
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.getAllEmployeeData(); }, 3000);
        setInterval(function () { return _this.getPendingData(); }, 3000);
    };
    TableComponent.prototype.getAllEmployeeData = function () {
        var _this = this;
        this.httpService.getAllEmployeeData().then(function (data) {
            _this.checkIn = data;
            console.log(_this.checkIn);
        });
    };
    TableComponent.prototype.getPendingData = function () {
        var _this = this;
        this.httpService.getPendingData().then(function (data1) {
            _this.Pending = data1;
            console.log(_this.Pending);
        });
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taaron/Documents/Employee_Dashboard/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map