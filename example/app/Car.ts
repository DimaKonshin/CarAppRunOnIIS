export class Car {
    carid: string;
    name: string;
    model: string;
    year: string;
    owner: string;
    phone: string;
    images: string;

    constructor(carid: string, name: string, model: string, year: string, owner: string, phone: string, images: string) {
        this.carid = carid;
        this.name = name;
        this.model = model;
        this.year = year;
        this.owner = owner;
        this.phone = phone;
        this.images = images;
    }
}

export class ListOfCar {
    private static list: Array<Car> = new Array<Car>();

    static Add(car: Car): void {
        this.list.push(car);
    }

    static GetCarByCarId(carid: string): Car {

        var list: Array<Car> =  this.list.filter(car => {
            return car.carid.indexOf(carid) > -1;
        });

        return list[0];
    }

    static GetListOfCar(): Array<Car> {
        return ListOfCar.list;
    }

    static Search(search: string): Array<Car> {
        return this.list.filter(car => {
            return car.name.indexOf(search) > -1 || car.model.indexOf(search) > -1;
        });
    }
}
