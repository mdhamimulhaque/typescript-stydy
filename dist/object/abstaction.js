"use strict";
// ===>with interface
// interface IVehicle{
//     startEngine():void;
//     stopEngine():void;
// }
// class Vehicle implements IVehicle{
//     constructor(
//         public type:string,
//         public name:string,
//         public model:number
//         ){
//     }
//     startEngine(): void {
//         console.log('start')
//     }
//     stopEngine(): void {
//         console.log('stop')
//     }
//     move(): void {
//         console.log('move')
//     }
// } 
// const vehicle1 = new Vehicle('car','toyota',2000)
//====>with abstraction class
class Vehicle {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;
    }
    move() {
        console.log('move');
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log('start');
    }
    stopEngine() {
        console.log('stop');
    }
}
const vehicle1 = new Car('car', 'toyota', 2000);
