"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(carid, name, model, year, owner, phone, images) {
        this.carid = carid;
        this.name = name;
        this.model = model;
        this.year = year;
        this.owner = owner;
        this.phone = phone;
        this.images = images;
    }
    return Car;
}());
exports.Car = Car;
var ListOfCar = /** @class */ (function () {
    function ListOfCar() {
    }
    ListOfCar.Add = function (car) {
        this.list.push(car);
    };
    ListOfCar.GetCarByCarId = function (carid) {
        var list = this.list.filter(function (car) {
            return car.carid.indexOf(carid) > -1;
        });
        return list[0];
    };
    ListOfCar.GetListOfCar = function () {
        return ListOfCar.list;
    };
    ListOfCar.Search = function (search) {
        return this.list.filter(function (car) {
            return car.name.indexOf(search) > -1 || car.model.indexOf(search) > -1;
        });
    };
    ListOfCar.list = new Array();
    return ListOfCar;
}());
exports.ListOfCar = ListOfCar;
