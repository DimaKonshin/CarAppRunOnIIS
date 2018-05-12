"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Car_1 = require("./Car");
var Logs_1 = require("./Logs");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.showOrHidePhone = true;
        this.textForButtonPhone = "Show phone";
        Car_1.ListOfCar.Add(new Car_1.Car("vin-1", "Mersedes", "E320", "1995", "Dima", "+7 924 123 45 67", "images/mers.png"));
        Car_1.ListOfCar.Add(new Car_1.Car("vin-2", "BMW", "M3", "1995", "Lena", "+7 928 123 45 60", "images/bmw.jpg"));
        Car_1.ListOfCar.Add(new Car_1.Car("vin-3", "Audi", "A4", "1995", "Max", "+7 925 123 40 62", "images/audi.jpg"));
        this.chooseCar("vin-1");
        this.getListOfCar();
    }
    ProductComponent.prototype.getListOfCar = function () {
        this.list = Car_1.ListOfCar.GetListOfCar();
    };
    ProductComponent.prototype.chooseCar = function (carid) {
        this.car = Car_1.ListOfCar.GetCarByCarId(carid);
        this.HidePhone();
    };
    ProductComponent.prototype.CheckIfThisCurrentCar = function (carid) {
        return this.car.carid == carid ? true : false;
    };
    ProductComponent.prototype.ShowPhone = function () {
        this.showOrHidePhone = false;
        this.textForButtonPhone = "Hide phone";
    };
    ProductComponent.prototype.HidePhone = function () {
        this.showOrHidePhone = true;
        this.textForButtonPhone = "Show phone";
    };
    ProductComponent.prototype.getShowOrHidePhone = function () {
        if (this.showOrHidePhone == true) {
            this.ShowPhone();
        }
        else {
            this.HidePhone();
        }
    };
    ProductComponent.prototype.clickByPhoneBtn = function () {
        this.getShowOrHidePhone();
    };
    ProductComponent.prototype.SearchModel = function (search) {
        this.list = Car_1.ListOfCar.Search(search);
    };
    ProductComponent.prototype.cancelModalWindow = function () {
        var log = new Logs_1.Log("cancel " + this.car.name + " - " + this.car.model, "exit", new Date());
        Logs_1.Logs.Add(log);
        this.listOfLog = Logs_1.Logs.GetListOfLogs();
    };
    ProductComponent.prototype.clickByBuyBtnInModalWindow = function () {
        var log = new Logs_1.Log("buy " + this.car.name + " - " + this.car.model, "success", new Date());
        Logs_1.Logs.Add(log);
        this.listOfLog = Logs_1.Logs.GetListOfLogs();
    };
    ProductComponent.prototype.checkLogType = function (type) {
        return type == 'success' ? true : false;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app/template3.html",
            styleUrls: ['app/app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
