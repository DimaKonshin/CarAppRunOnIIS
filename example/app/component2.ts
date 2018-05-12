import { Component } from "@angular/core";
import { Car, ListOfCar } from "./Car";
import { Log, Logs } from "./Logs";

@Component({
    selector: "app",
    templateUrl: "app/template3.html",
    styleUrls: ['app/app.component.css']
})
export class ProductComponent {

    car: Car;
    list: Array<Car>;
    listOfLog: Array<Log>;
    showOrHidePhone: boolean = true;
    textForButtonPhone: string = "Show phone";

    constructor() {
        ListOfCar.Add(new Car("vin-1", "Mersedes", "E320", "1995", "Dima", "+7 924 123 45 67", "images/mers.png"));
        ListOfCar.Add(new Car("vin-2", "BMW", "M3", "1995", "Lena", "+7 928 123 45 60", "images/bmw.jpg"));
        ListOfCar.Add(new Car("vin-3", "Audi", "A4", "1995", "Max", "+7 925 123 40 62", "images/audi.jpg"));
        this.chooseCar("vin-1");
        this.getListOfCar();
    }

    getListOfCar() {
        this.list = ListOfCar.GetListOfCar();
    }

    chooseCar(carid) {
        this.car = ListOfCar.GetCarByCarId(carid);
        this.HidePhone();
    }

    CheckIfThisCurrentCar(carid) {
        return this.car.carid == carid ? true : false;
    }

    ShowPhone() {
        this.showOrHidePhone = false
        this.textForButtonPhone = "Hide phone";
    }

    HidePhone() {
        this.showOrHidePhone = true;
        this.textForButtonPhone = "Show phone";
    }

    getShowOrHidePhone() {
        if (this.showOrHidePhone == true) {
            this.ShowPhone();
        }
        else {
            this.HidePhone();
        }
    }

    clickByPhoneBtn() {
        this.getShowOrHidePhone();
    }

    SearchModel(search) {
        this.list = ListOfCar.Search(search);
    }

    cancelModalWindow() {
        var log: Log = new Log("cancel " + this.car.name + " - " + this.car.model, "exit", new Date());
        Logs.Add(log);

        this.listOfLog = Logs.GetListOfLogs();
    }

    clickByBuyBtnInModalWindow() {
        var log: Log = new Log("buy " + this.car.name + " - " + this.car.model, "success", new Date());
        Logs.Add(log);

        this.listOfLog = Logs.GetListOfLogs();
    }

    checkLogType(type) {
        return type == 'success' ? true : false;
    }
}