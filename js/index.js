let fordMustang = {};
fordMustang.color = 'red';
fordMustang.engine = 'V8 5.0';
fordMustang.make = 'Ford';
fordMustang.model = 'Mustang';
fordMustang.price = '60000';
fordMustang.year = '1969';
fordMustang.beep = beep;
console.dir(fordMustang);
fordMustang.beep();

let chevroletCorvette = {
    color: 'black',
    engine: 'V6 5.0',
     make: 'Chevrolet',
    model: 'Corvette',
    year: 1990,
    price: 70000,
    beep: beep
}

console.log(chevroletCorvette);
chevroletCorvette.beep();

function beep() {
    console.log(this.model + ' beep-beep');
}

function Car(color, engine, make, model, year, price) {
    this.color = color;
    this.engine = engine;
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    return this
}   

Car.prototype.beep = beep;

let toyotaTundra = new Car('black', 'V8 5.2', 'Toyota', 'Tundra',
 2015, 35000);
console.log(toyotaTundra);
toyotaTundra.beep();

class SuperCar {
    constructor(color, engine, make, model, year, price) {
        this.color = color;
        this.engine = engine;
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        return this
    }   
     beep() {
        console.log(this.model + ' beep-beep');
    }
}
let ferrariLaFerrari = new SuperCar('red', 'W12', 'Ferrari',
  'LaFerrari', 2009, 30000);
console.log(ferrariLaFerrari);
ferrariLaFerrari.beep();

let ferrariF430 = Object.create(ferrariLaFerrari);
ferrariF430.model = 'F430';
ferrariF430.year = 1989;
console.log(ferrariF430);
ferrariF430.beep();

console.log(JSON.stringify(ferrariLaFerrari));

let newFerrari = JSON.parse('{"color":"red","engine":"W12","make":"Ferrari","model":"LaFerrari","year":2009,"price":30000}');
console.log(newFerrari);






















